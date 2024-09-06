import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/current-user/current-user.decorator';
import { AuthWithRoles } from './auth.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('refresh-token')
  refresh(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refresh(refreshTokenDto);
  }

  @Post('logout')
  @AuthWithRoles()
  create(@CurrentUser() user: User, @Body() logoutDto: LogoutDto) {
    return this.authService.logout(logoutDto, user);
  }
}
