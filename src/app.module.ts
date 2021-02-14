import { UnsplastService } from './unsplast.service';
import { UnsplastController } from './unsplast.controller';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UnsplastController, WeatherController],
  providers: [WeatherService, UnsplastService],
})
export class AppModule {}
