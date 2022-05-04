import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Helper } from '../helpers/helper';

@Injectable()
export class XAPIKEYGuard implements CanActivate {
  private readonly logger: Logger = new Logger('XAPIKEYGuard');
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const xApiKey = request.get('x-api-key');
    const ip_address = request.clientIp;

    this.logger.warn(`Get request from ${ip_address}`);
    return xApiKey === Helper.getSharedApiKey();
  }
}
