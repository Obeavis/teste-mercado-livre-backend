import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin } from 'rxjs';
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

  public getItem(id) {
    const item = this.http.get<ItemDto>(
      `${process.env.BASE_API_URL}/items/${id}`,
    );
    const description = this.http.get(
      `${process.env.BASE_API_URL}/items/${id}/description`,
    );

    const teste = forkJoin({
      item,
      description,
    }).pipe(
      map((resp) => {
        return {
          item: resp.item?.data,
          description: resp.description?.data,
        };
      }),
    );

    return teste;
  }
}
