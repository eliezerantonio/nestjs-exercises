import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto, ListAllEntities } from './dto/cars.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars(@Query() query: ListAllEntities) {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  create(@Body() body: CreateCartDto) {
    return this.carsService.save(body);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: number, @Body() body: any) {
    return this.carsService.update(body);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
