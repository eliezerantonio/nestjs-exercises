import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota' },
    { id: 3, brand: 'Honda' },
    { id: 3, brand: 'BMW' },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car)
      throw new NotFoundException(`Não foi encontrado carro com id ${id}`);

    return car;
  }

  public save(body: any) {
    this.cars.push(body);
  }
}
