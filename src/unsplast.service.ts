import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class UnsplastService {
  async getPhotoByCityName(name: string): Promise<any> {
    try {
      const request = await fetch(
        `${process.env.UNSPLAST_BASE_URL}?page=1&query=${name}&client_id=${process.env.UNSPLASH_API_ACCESS}`,
      );

      // console.log(await request.json());
      return await request.json();
    } catch (error) {
      console.log(error);
    }
  }
}
