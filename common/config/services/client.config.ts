import { ClientsModuleOptions, Transport } from '@nestjs/microservices';

export const ClientConfig: ClientsModuleOptions = [
  {
    name: 'SERVICES',
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  },
];
