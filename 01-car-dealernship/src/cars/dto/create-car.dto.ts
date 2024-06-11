import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `The Brand Most Be String` })
  readonly brand: string;
  @IsString()
  readonly model: string;
}
