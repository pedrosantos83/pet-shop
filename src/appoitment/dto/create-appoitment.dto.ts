import { ObjectId } from 'mongoose';

export class CreateAppoitmentDto {
  readonly date: Date;
  readonly service: string;
  readonly pet: ObjectId;
}
