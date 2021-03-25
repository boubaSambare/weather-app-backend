import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('WeatherController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/weather?name=roma (GET)', () => {
    return request(app.getHttpServer())
      .get('/weather?name=roma')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/weather/mobile?name=roma (GET)', () => {
    return request(app.getHttpServer())
      .get('/weather/mobile?name=roma')
      .expect('Content-Type', /json/);
  });
});
