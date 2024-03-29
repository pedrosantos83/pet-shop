import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from 'src/clients/client.schema';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const createdClient = new this.clientModel(createClientDto);
    const result = await createdClient.save();
    return result;
  }
  async findOne(email: string): Promise<Client | undefined> {
    const client = await this.clientModel.findOne({ email }).exec();
    return client;
  }
  async findById(id: string): Promise<Client | undefined> {
    return this.clientModel.findById(id).exec();
  }
}
