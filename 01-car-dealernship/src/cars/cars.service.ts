import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

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

  public save(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    return {
      message: 'Criado com sucesso',
      car: car,
    };
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Car id is not valid');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        return carDb;
      }
    });

    return ''; // carro atualizado;
  }

  public delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((c) => c.id !== id);

    return {
      message: 'Eliminado com sucesso',
    };
  }
}
