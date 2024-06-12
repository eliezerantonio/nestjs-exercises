import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { create } from 'domain';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: Date.now(),
    },
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      createdAt: new Date().getTime(),
      ...createBrandDto,
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException('Brand not found');

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((car) => {
      if (car.id === id) {
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
          id,
        };
        return brandDB;
      }
    });

    return brandDB;
  }

  remove(id: string) { 
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
