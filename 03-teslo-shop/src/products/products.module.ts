import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

import { Product, ProductImage } from './entities';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
})
export class ProductsModule {}
