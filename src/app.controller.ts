import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard) // this is for demo, guard made available fore all at app level under module.ts
  //you can define interceptor at this level as well.
  getHello(): string {
    return this.appService.getHello();
  }
}
