export interface ItemInterface {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export class ItemDto implements ItemInterface {
  public id: string;
  public title: string;
  public price: {
    currency: string;
    amount: number;
  };
  public picture: string;
  public condition: string;
  public free_shipping: boolean;
  public sold_quantity: number;
  public description: string;

  constructor({
    id,
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
  }: ItemInterface) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;
  }
}
