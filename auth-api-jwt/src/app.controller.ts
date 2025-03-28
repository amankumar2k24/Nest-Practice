import { Controller, Get, Post, UseGuards, Request, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.user
  }

  // GET /protected
  @Get('protected')
  getHello(@Request() req): any {
    return req.user
  }
}
