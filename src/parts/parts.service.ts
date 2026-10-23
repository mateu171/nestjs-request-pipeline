
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreatePartDto } from '../dto/create-part.dto';
import { UpdatePartDto } from '../dto/update-part.dto';
import { Part } from './part.interface';

@Injectable()
export class PartsService {
  private parts: Part[] = [];

  findAll(): Part[] {
    return this.parts;
  }

  findOne(id: string): Part {
    const part = this.parts.find((item) => item.id === id);

    if (!part) {
      throw new NotFoundException(`Part with ID ${id} not found`);
    }

    return part;
  }

  create(dto: CreatePartDto): Part {
    const newPart: Part = {
      id: randomUUID(),
      title: dto.title,
      price: dto.price,
      oemCode: dto.oemCode,
      condition: dto.condition,
      carBrand: dto.carBrand,
    };

    this.parts.push(newPart);

    return newPart;
  }

  update(id: string, dto: UpdatePartDto): Part {
    const part = this.findOne(id);

    Object.assign(part, dto);

    return part;
  }

  remove(id: string): { message: string } {
    const part = this.findOne(id);

    this.parts = this.parts.filter((item) => item.id !== part.id);

    return { message: 'Part deleted successfully' };
  }
}
