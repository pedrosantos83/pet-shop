import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Client } from 'src/clients/client.schema';
import { Appoitment } from 'src/appoitment/appoitment.schema';

export type PetDocument = HydratedDocument<Pet>;

@Schema()
export class Pet {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  type: string;

  @Prop()
  gender: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
  client: Client;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Appoitment' })
  appoitment: Appoitment;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
