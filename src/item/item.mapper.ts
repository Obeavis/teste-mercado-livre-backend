import { Injectable } from '@nestjs/common';
import { ItemDto } from 'src/item/item.dto';

@Injectable()
export class ItemMapper {
  public static mapItem({ item, description, categories }): ItemDto {
    return new ItemDto({
      id: item.id,
      title: item.title,
      price: {
        currency: item.prices?.presentation?.display_currency,
        amount: item.price,
      },
      thumbnail: item.thumbnail,
      pictures: item?.pictures?.map((picture) => picture.url),
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping,
      sold_quantity: item.sold_quantity,
      category_id: item.category_id,
      categories: categories?.path_from_root?.map(
        (categorie) => categorie.name,
      ),
      description: description?.plain_text,
    });
  }
}
