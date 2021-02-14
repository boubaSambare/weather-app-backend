import { UnsplastService } from './unsplast.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('unsplast')
export class UnsplastController {
  constructor(private readonly unsplastService: UnsplastService) {}

  @Get()
  async getPhotoByCityName(@Query('name') name: string): Promise<any> {
    const photos = await this.unsplastService.getPhotoByCityName(name);
    return { ...photos };
  }
}
