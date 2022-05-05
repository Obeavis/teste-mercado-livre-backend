import { Injectable } from '@nestjs/common';
import { ItemDto } from 'src/item/item.dto';

@Injectable()
export class ItemMapper {
  public static mapItem({ item, description }): ItemDto {
    return new ItemDto({
      id: item.id,
      title: item.title,
      price: {
        currency: item.prices?.presentation?.display_currency,
        amount: item.price,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description?.plain_text,
    });
  }
}
