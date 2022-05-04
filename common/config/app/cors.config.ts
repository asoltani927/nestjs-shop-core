import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class CorsConfig {
  constructor(private configService: ConfigService) {}

  get credentials(): boolean {
    return this.configService.get<boolean>('CORS_CREDENTIALS');
  }

  get methods(): string {
    return (
      this.configService.get<string>('CORS_METHODS') ||
      ['GET', 'POST', 'PUT', 'DELETE'].join(',')
    );
  }

  get origin(): boolean {
    return this.configService.get<boolean>('CORS_ORIGIN') || true;
  }
}
