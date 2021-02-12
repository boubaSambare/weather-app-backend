import { UnsplastModule } from './unsplast.module';
import { UnsplastController } from './unsplast.controller';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UnsplastModule, ConfigModule.forRoot()],
  controllers: [UnsplastController, WeatherController],
  providers: [WeatherService],
})
export class AppModule {}
