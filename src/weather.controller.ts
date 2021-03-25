import { Controller, Get, Query, NotFoundException, Res, HttpStatus, HttpCode } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Response } from 'express';

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

  @Get('mobile')
  @HttpCode(200)
  async getWeatherByCityName(@Query('name') cityName: string): Promise<any> {
    const current = await this.weatherService.getAllCityData(cityName);
    if (!current) {
      throw new NotFoundException('city not found');
      return;
    }
    const forecast = await this.weatherService.getWeatherDataByCoord(
      current.coord.lon,
      current.coord.lat,
    );
    return { current, forecast };
  }
}
