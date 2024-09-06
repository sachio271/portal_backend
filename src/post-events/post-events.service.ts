import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostEventDto } from './dto/create-post-event.dto';
import { UpdatePostEventDto } from './dto/update-post-event.dto';

@Injectable()
export class PostEventsService {
  constructor(private prismaService: PrismaService) {}

  async create(
    createPostEventDto: CreatePostEventDto,
    file: Express.Multer.File,
  ) {
    console.log(file);
    const fileName = `./uploads/${file.originalname}`;
    if (!existsSync('./uploads')) {
      mkdirSync('./uploads');
    }
    writeFileSync(fileName, file.buffer);
    const data = await this.prismaService.postingEvent.create({
      data: {
        title: createPostEventDto.title,
        subTitle: createPostEventDto.subtitle,
        description: createPostEventDto.description,
        img: fileName,
        link: createPostEventDto.link,
      },
    });
    return {
      ...data,
      img: 'http://localhost:3000/file/' + fileName.split('/').pop(),
    };
  }

  async findAll() {
    const data = await this.prismaService.postingEvent.findMany();
    return data.map((item) => ({
      ...item,
      img: 'http://localhost:3000/file/' + item.img.split('/').pop(),
    }));
  }

  async findOne(id: string) {
    const data = await this.prismaService.postingEvent.findUnique({
      where: { id },
    });
    data.img = 'http://localhost:3000/file/' + data.img.split('/').pop();
    return data;
  }

  async update(
    id: string,
    updatePostEventDto: UpdatePostEventDto,
    file: Express.Multer.File,
  ) {
    const fileName = `./uploads/${file.originalname}`;
    if (!existsSync('./uploads')) {
      mkdirSync('./uploads');
    }
    writeFileSync(fileName, file.buffer);
    const data = await this.prismaService.postingEvent.update({
      where: { id },
      data: {
        title: updatePostEventDto.title,
        subTitle: updatePostEventDto.subtitle,
        description: updatePostEventDto.description,
        img: fileName,
        link: updatePostEventDto.link,
      },
    });
    return {
      ...data,
      img: 'http://localhost:3000/file/' + fileName.split('/').pop(),
    };
  }

  remove(id: string) {
    return this.prismaService.postingEvent.delete({
      where: { id },
    });
  }
}
