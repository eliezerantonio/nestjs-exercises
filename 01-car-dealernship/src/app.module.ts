import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [CarsModule],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [],
})
export class AppModule {}
