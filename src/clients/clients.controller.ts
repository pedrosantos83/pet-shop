import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './client.schema';
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const generatedClient = await this.clientsService.create(createClientDto);
    return { client: generatedClient };
  }
}
