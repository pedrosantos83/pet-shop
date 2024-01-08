import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
