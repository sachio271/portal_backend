import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostEventsModule } from './post-events/post-events.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PostEventsModule,
    AuthModule,
    FileModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
