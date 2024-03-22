import { Controller, Get } from '@nestjs/common';
import { CvResponse } from './response';

@Controller()
export class AppController {
  constructor() {}

  @Get('dev/jack-perrin')
  getCV() {
    return CvResponse;
  }

  @Get('monitor/version')
  getVersion() {
    return process.env.npm_package_version || '0.0.1';
  }
}
