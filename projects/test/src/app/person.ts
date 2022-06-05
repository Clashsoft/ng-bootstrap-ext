import {IsNotEmpty, IsString, Max, Min} from 'class-validator';

export class Person {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Min(0)
  @Max(100)
  age!: number;
}
