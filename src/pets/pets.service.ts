import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet } from './pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<Pet>) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const createdPet = new this.petModel(createPetDto);
    // Logger.log('created:', createdPet);
    const result = await createdPet.save();
    return result;
  }
  async findAll(): Promise<Pet[]> {
    const results = await this.petModel
      .find()
      .populate('client')
      .populate('appoitment');

    return results;
  }
}
