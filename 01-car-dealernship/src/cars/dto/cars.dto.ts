import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends CreateCarDto {
  id: number;
}
export class DeleteCarDto {
  id: number;
}

export class ListAllEntities extends UpdateCarDto {}
