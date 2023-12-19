import { Body, Controller, Get, InternalServerErrorException, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { FreezePipe } from './pipes/freeze.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard) // this is for demo, guard made available fore all at app level under module.ts
  //you can define interceptor at this level as well.
  //can define @UseFilters() here to apply on a per route basis
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  //@UseGuards(FreezePipe)
  examplePost(@Body(new FreezePipe()) body: any){
    //body.test = 32; // This will error out
  }

  @Get('error')
  throwError() {
    throw new InternalServerErrorException();
  }
}
