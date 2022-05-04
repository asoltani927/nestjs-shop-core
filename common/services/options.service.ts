import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OptionInterface } from '../interfaces/option.interface';
import { Observable } from 'rxjs';

@Injectable()
export class OptionsService {
  private readonly logger: Logger = new Logger();

  constructor(
    @Inject('SERVICES')
    private readonly microServiceClient: ClientProxy,
  ) {}

  get(name): Observable<OptionInterface> {
    return this.microServiceClient
      .send('get_option', {
        name,
      })
      .pipe();
  }

  save(name, value) {
    return this.microServiceClient
      .send('save_option', {
        name,
        value,
      })
      .pipe();
  }
}
