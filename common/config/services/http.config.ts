import { ConfigModule, ConfigService } from '@nestjs/config';

export const HttpServiceConfigAsync = {
  isGlobal: true,
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    timeout: 5000,
    maxRedirects: 3,
  }),
};
