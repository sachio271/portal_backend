import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostEventsController } from './post-events.controller';
import { PostEventsService } from './post-events.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
      storage: memoryStorage(),
    }),
  ],
  controllers: [PostEventsController],
  providers: [PostEventsService, PrismaService],
})
export class PostEventsModule {}
