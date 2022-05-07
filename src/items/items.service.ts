import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemDto } from 'src/item/item.dto';
import { ItemsDto } from './items.dto';

@Injectable()
export class ItemsService {
  public constructor(private readonly http: HttpService) {}

  public searchItems(search): Observable<ItemsDto[]> {
    return this.http
      .get<ItemsDto[]>(
        `${process.env.BASE_API_URL}/sites/MLA/search?q=:${search}`,
      )
      .pipe(map((response) => response.data));
  }

  public async getItem(id) {
    try {
      const item = await firstValueFrom(
        this.http.get<ItemDto>(`${process.env.BASE_API_URL}/items/${id}`),
      );

      const categories = await firstValueFrom(
        this.http.get(
          `${process.env.BASE_API_URL}/categories/${item?.data?.category_id}`,
        ),
      );

      const description = await firstValueFrom(
        this.http.get(`${process.env.BASE_API_URL}/items/${id}/description`),
      );

      return {
        item: item?.data,
        description: description?.data,
        categories: categories.data,
      };
    } catch (error) {
      return error;
    }
  }
}
