import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [],
})
export class AppModule {}
