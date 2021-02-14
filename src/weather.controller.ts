import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getCityData(@Query('name') cityName: string): Promise<any> {
    const weatherData = await this.weatherService.getAllCityData(cityName);
    return { ...weatherData };
  }

  @Get('onecall')
  async getWeatherDataByCoord(
    @Query('lon') lon: number,
    @Query('lat') lat: number,
  ): Promise<any> {
    const weatherData = await this.weatherService.getWeatherDataByCoord(
      lon,
      lat,
    );
    return { ...weatherData };
  }
}
