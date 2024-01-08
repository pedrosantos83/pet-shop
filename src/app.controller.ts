import { Controller, Get, Post, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('p')
  // @HttpCode(204)
  postGoodbye(): string {
    return this.appService.postGoodbye();
  }
}
