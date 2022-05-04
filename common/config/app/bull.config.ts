import { ConfigModule, ConfigService } from '@nestjs/config';
import { QueueOptions } from 'bull';
import * as Redis from 'ioredis';
import { BullModuleAsyncOptions } from '@nestjs/bull/dist/interfaces/bull-module-options.interface';

export const bullConfigAsync: BullModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return <QueueOptions>{
      redis: <Redis.RedisOptions>(<unknown>{
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<string>('REDIS_PORT'),
      }),
    };
  },
};
