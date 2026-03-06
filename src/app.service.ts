import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return {
      message: 'Hello from NestJS!',
    };
  }

  getVersion(): { version: string; timestamp: string } {
    return {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }
}
