import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CvResponse } from './../src/response';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/dev/jack-perrin (GET)', () => {
    return request(app.getHttpServer())
      .get('/dev/jack-perrin')
      .expect(200)
      .expect(CvResponse);
  });
});
