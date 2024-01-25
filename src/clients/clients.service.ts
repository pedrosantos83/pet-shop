import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from 'src/clients/client.schema';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { MongoClient } from 'mongodb';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<Client>,
    private readonly mongoClient: MongoClient,
  ) {}

  async findOne(email: string): Promise<Client | undefined> {
    const db = await this.mongoClient.connect();
    const collection = db.collection('clients');
    const client = await collection.findOne({ email });
    return client;
  }
  async create(createClientDto: CreateClientDto): Promise<Client> {
    const createdClient = new this.clientModel(createClientDto);
    const result = await createdClient.save();
    return result;
  }
}
