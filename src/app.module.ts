import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class AppModule {}
