import { ObjectId } from 'mongoose';

export class CreatePetDto {
  readonly name: string;
  readonly age: number;
  readonly type: string;
  readonly gender: string;
  readonly client: ObjectId;
  readonly appoitment: ObjectId;
}
