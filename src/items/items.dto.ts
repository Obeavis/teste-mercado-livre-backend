import { ItemDto, ItemInterface } from 'src/item/item.dto';

export interface ItemsInterface {
  categories: string[];
  items: ItemInterface[];
}

export class ItemsDto implements ItemsInterface {
  public categories: string[];
  public items: ItemDto[];

  constructor({ categories, items }: ItemsInterface) {
    this.categories = categories;
    this.items = items;
  }
}
