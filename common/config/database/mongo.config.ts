import { ConfigModule, ConfigService } from '@nestjs/config';

export const MongoConfigAsync = {
  isGlobal: true,
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const MongoURI = configService.get<string>('MONGO_URI');
    if (!MongoURI) {
      const DB_HOST = configService.get<string>('MONGO_HOST');
      const DB_PASSWORD = configService.get<string>('MONGO_PASSWORD');
      const DB_USER = configService.get<string>('MONGO_USERNAME');
      const DB_PORT = configService.get<string>('MONGO_PORT') ?? 27017;
      const DB_NAME = configService.get<string>('MONGO_DOCUMENT');
      const PASSWORD = encodeURIComponent(DB_PASSWORD);
      const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
      return {
        uri: DB_URL,
      };
    }
    return {
      uri: MongoURI,
    };
  },
};
