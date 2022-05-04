import { ConfigModule, ConfigService } from '@nestjs/config';

export const RedisConfigAsync = {
  isGlobal: true,
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    host: configService.get<string>('REDIS_HOST'),
    port: configService.get<string>('REDIS_PORT'),
  }),
};
