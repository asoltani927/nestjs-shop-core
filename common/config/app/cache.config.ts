import * as redisStore from 'cache-manager-redis-store';

export const CacheConfig = {
  isGlobal: true,
  store: redisStore,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
};
