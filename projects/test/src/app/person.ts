import {
  IsDivisibleBy,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class Person {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @IsEmail()
  email!: string;

  @IsPhoneNumber()
  phone!: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  age!: number;

  @IsNumber()
  @IsDivisibleBy(0.01)
  balance!: number;
}
