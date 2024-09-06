import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostEventDto } from './dto/create-post-event.dto';
import { UpdatePostEventDto } from './dto/update-post-event.dto';
import { PostEventsService } from './post-events.service';

@Controller('post-events')
export class PostEventsController {
  constructor(private readonly postEventsService: PostEventsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(
    @Body() createPostEventDto: CreatePostEventDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.postEventsService.create(createPostEventDto, file);
  }

  @Get()
  findAll() {
    return this.postEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postEventsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('img'))
  update(
    @Param('id') id: string,
    @Body() updatePostEventDto: UpdatePostEventDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.postEventsService.update(id, updatePostEventDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postEventsService.remove(id);
  }
}
