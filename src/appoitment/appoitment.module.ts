import { Module } from '@nestjs/common';
import { AppoitmentController } from './appoitment.controller';
import { AppoitmentService } from './appoitment.service';
import { Appoitment, AppoitmentSchema } from './appoitment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appoitment.name, schema: AppoitmentSchema },
    ]),
  ],
  controllers: [AppoitmentController],
  providers: [AppoitmentService],
})
export class AppoitmentModule {}
