import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [],
})
export class AppModule {}
