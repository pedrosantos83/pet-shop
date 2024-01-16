import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Pet } from 'src/pets/pet.schema';

export type AppoitmentDocument = HydratedDocument<Appoitment>;

@Schema()
export class Appoitment {
  @Prop()
  date: Date;

  @Prop()
  service: string;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'Pet' })
  pet: Pet;
}

export const AppoitmentSchema = SchemaFactory.createForClass(Appoitment);
