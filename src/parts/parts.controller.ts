
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePartDto } from '../dto/create-part.dto';
import { UpdatePartDto } from '../dto/update-part.dto';
import type { Part } from './part.interface';
import { PartsService } from './parts.service';

@Controller('parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Post()
  create(@Body() dto: CreatePartDto): Part {
    return this.partsService.create(dto);
  }

  @Get()
  findAll(): Part[] {
    return this.partsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Part {
    return this.partsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePartDto,
  ): Part {
    return this.partsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): { message: string } {
    return this.partsService.remove(id);
  }
}
