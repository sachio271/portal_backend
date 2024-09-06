import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { LoginResponseDto } from './dto/response/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.prismaService.user.findUnique({
      where: {
        username: loginDto.username,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (!bcrypt.compareSync(loginDto.password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const [accessToken, refreshToken] = await this.generateTokens(user);
    await this.prismaService.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
      },
    });
    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  generateTokens(user: User): Promise<[string, string]> {
    const payload = { id: user.id, username: user.username };
    return Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('ACCESS_TOKEN_KEY'),
        expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRE'),
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('REFRESH_TOKEN_KEY'),
        expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRE'),
      }),
    ]);
  }

  async logout(logoutDto: LogoutDto, currentUser: User): Promise<void> {
    console.log(logoutDto.refreshToken);
    console.log(currentUser.id);

    const user = await this.prismaService.refreshToken.findFirst({
      where: {
        token: logoutDto.refreshToken,
        userId: currentUser.id,
      },
    });
    console.log(user);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    await this.prismaService.refreshToken.deleteMany({
      where: {
        token: logoutDto.refreshToken,
      },
    });
  }
  refresh(refreshTokenDto: RefreshTokenDto) {
    throw new Error('Method not implemented.');
  }
}
