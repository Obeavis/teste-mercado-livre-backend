import { Controller, Get, Query, Param } from '@nestjs/common';
import { map, Observable } from 'rxjs';
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
  public async getItem(@Param('id') id: string) {
    try {
      const response = await this.service.getItem(id);

      return ItemMapper.mapItem(response);
    } catch (error) {
      return error;
    }
  }
}
