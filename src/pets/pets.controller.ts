import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './pet.schema';
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}
  @Get()
  //   getHello(): string {
  //     return 'my pets';
  //   }
  async findAll(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    await this.petsService.create(createPetDto);
  }
}
