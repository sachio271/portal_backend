import { PartialType } from '@nestjs/mapped-types';
import { CreatePostEventDto } from './create-post-event.dto';

export class UpdatePostEventDto extends PartialType(CreatePostEventDto) {}
