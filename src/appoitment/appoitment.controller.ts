import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppoitmentService } from './appoitment.service';
import { CreateAppoitmentDto } from './dto/create-appoitment.dto';

@Controller('appoitment')
export class AppoitmentController {
  constructor(private readonly appoitmentService: AppoitmentService) {}

  @Post()
  async create(@Body() CreateAppoitmentDto: CreateAppoitmentDto) {
    const generatedAppoitment =
      await this.appoitmentService.create(CreateAppoitmentDto);
    return { appoitment: generatedAppoitment };
  }
}
