import { Controller, Get, Query, Param } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ItemDto } from 'src/item/item.dto';
import { ItemMapper } from 'src/item/item.mapper';
import { ItemsDto } from './items.dto';
import { ItemsMapper } from './items.mapper';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {
  public constructor(private readonly service: ItemsService) {}

  @Get()
  public searchItems(@Query('q') search): Observable<ItemsDto> {
    return this.service
      .searchItems(search)
      .pipe(map(ItemsMapper.mapSearchItems));
  }

  @Get('/:id')
  public getItem(@Param('id') id: string): Observable<ItemDto> {
    return this.service.getItem(id).pipe(map(ItemMapper.mapItem));
  }
}
