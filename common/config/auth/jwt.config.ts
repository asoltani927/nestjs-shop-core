import { Injectable } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Injectable()
export default class JwtConfig {
  static getJwtConfig(configService: ConfigService) {
    return {
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: {
        expiresIn: configService.get<string>('JWT_EXPIRES_IN') ?? '24h',
      },
    };
  }
}

export const JwtConfigModuleOptionsAsync = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    return JwtConfig.getJwtConfig(configService);
  },
  inject: [ConfigService],
};
