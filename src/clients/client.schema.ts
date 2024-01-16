import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  adress: string;

  @Prop()
  email: string;

  @Prop()
  phone: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
