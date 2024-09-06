import { User } from '@prisma/client';

export class LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  user: User;
}
