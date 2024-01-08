import { Module } from '@nestjs/common';
import { AppoitmentController } from './appoitment.controller';
import { AppoitmentService } from './appoitment.service';

@Module({
  controllers: [AppoitmentController],
  providers: [AppoitmentService],
})
export class AppoitmentModule {}
