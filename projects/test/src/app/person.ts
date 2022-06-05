import {IsDivisibleBy, IsNotEmpty, IsNumber, IsString, Max, Min} from 'class-validator';

export class Person {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  age!: number;

  @IsNumber()
  @IsDivisibleBy(0.01)
  balance!: number;
}
