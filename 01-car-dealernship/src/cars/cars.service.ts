import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
@Injectable()
export class CarsService {
  private cars: Car[] = [{ id: uuid(), brand: 'Toyota', model: 'Corola' }];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car)
      throw new NotFoundException(`Não foi encontrado carro com id ${id}`);

    return car;
  }

  public save(body: any) {
    body.id = uuid();
    this.cars.push(body);
    return {
      message: 'Cadastrado com sucesso',
      car: body,
    };
  }

  public delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((c) => c.id !== id);

    return {
      message: 'Eliminado com sucesso',
    };
  }

  public update(body: any) {
    const { id, brand } = body;

    const car = this.findOneById(id);

    car.brand = brand;

    return {
      message: 'Atualizado com sucesso',
      data: { body },
    };
  }
}
