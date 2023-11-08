import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSeriesDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo no de ser vacío' })
  @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo titulo no debe ser mayor a 250 caracteres',
  })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no de ser vacío' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo sinopsis no debe ser mayor a 5000 caracteres',
  })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director no de ser vacío' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo director no debe ser mayor a 100 caracteres',
  })
  readonly director: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo duracion no de ser vacío' })
  @IsNumber({}, { message: 'El campo duracion debe ser de tipo número' })
  readonly duracion: number;

  @ApiProperty({ example: '2005-05-01' })
  @IsDefined({ message: 'El campo fecha de Estreno no de ser vacío' })
  @IsDateString(
    {},
    { message: 'El campo fecha de Estreno debe ser de tipo fecha' },
  )
  readonly fechaEstreno: Date;
}
