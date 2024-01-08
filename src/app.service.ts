import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    Logger.log('get tested');
    return 'Hello World!';
  }
  postGoodbye(): string {
    Logger.log('post tested');
    return 'Goodbye World, by Pedro!';
  }
}
