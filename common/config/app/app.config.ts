import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class AppConfig {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('APP_NAME') || 'Nest App';
  }

  get port(): number {
    return this.configService.get<number>('APP_PORT') || 3000;
  }

  get graphqlPort(): number {
    return this.configService.get<number>('GRAPHQL_PORT') || 9090;
  }

  get sharedPort(): number {
    return this.configService.get<number>('SHARED_PORT') || 3030;
  }

  get adminPort(): number {
    return this.configService.get<number>('APP_ADMIN_PORT') || 3001;
  }

  get IsDebugMode(): boolean {
    return this.configService.get<boolean>('APP_DEBUG') || true;
  }

  get rateLimit(): number {
    return this.configService.get<number>('RATE_LIMIT') || 5000;
  }
}
