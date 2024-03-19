import { Controller, Get } from '@nestjs/common';
import { CvResponse } from './response';

@Controller()
export class AppController {
  constructor() {}

  @Get('dev/jack-perrin')
  getCV() {
    return CvResponse;
  }
}
