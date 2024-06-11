export class CreateCartDto {
  brand: string;
  year: number;
}

export class UpdateCarDto extends CreateCartDto {
  id: number;
}
export class DeleteCarDto {
  id: number;
}

export class ListAllEntities extends UpdateCarDto {}
