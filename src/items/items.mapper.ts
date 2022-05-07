import { Injectable } from '@nestjs/common';
import { ItemDto } from 'src/item/item.dto';
import { ItemsDto } from './items.dto';

@Injectable()
export class ItemsMapper {
  public static mapSearchItems(response): ItemsDto {
    return {
      categories: response.filters
        ?.filter((filter) => filter.id === 'category')?.[0]
        ?.values?.[0]?.path_from_root?.map((values) => values.name),
      items: response.results?.map((result) => {
        return new ItemDto({
          id: result.id,
          title: result.title,
          price: {
            currency: result.prices?.presentation?.display_currency,
            amount: result.price,
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping?.free_shipping,
          sold_quantity: result.sold_quantity,
          category_id: result.category_id,
          description: result.description,
        });
      }),
    };
  }
}
