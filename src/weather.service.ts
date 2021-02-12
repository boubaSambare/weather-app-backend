import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class WeatherService {
  async getAllCityData(cityName: string): Promise<any> {
    const request = await fetch(
      `${process.env.METEO_BASE_URL}weather?q=${cityName}&appid=${process.env.METEO_API_KEY}`,
    );
    if (!request.ok) {
      console.log(await request.json());
      throw new NotFoundException('city not found');
    }
    return await request.json();
  }
}
