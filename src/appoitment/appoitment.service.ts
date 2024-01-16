import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appoitment } from 'src/appoitment/appoitment.schema';
import { CreateAppoitmentDto } from 'src/appoitment/dto/create-appoitment.dto';

@Injectable()
export class AppoitmentService {
  constructor(
    @InjectModel(Appoitment.name) private appoitmentModel: Model<Appoitment>,
  ) {}
  async create(createAppoitmentDto: CreateAppoitmentDto): Promise<Appoitment> {
    const createdAppoitment = new this.appoitmentModel(createAppoitmentDto);
    // Logger.log(createdAppoitment);
    const result = await createdAppoitment.save();
    return result;
  }
  async findAll(): Promise<Appoitment[]> {
    const results = await this.appoitmentModel.find().populate('pet');

    return results;
  }
}
