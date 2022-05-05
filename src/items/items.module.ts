import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ItemsController } from './items.controller';
import { ItemsMapper } from './items.mapper';
import { ItemsService } from './items.service';

@Module({
  controllers: [ItemsController],
  imports: [HttpModule],
  providers: [ItemsMapper, ItemsService],
})
export class ItemsModule {}
