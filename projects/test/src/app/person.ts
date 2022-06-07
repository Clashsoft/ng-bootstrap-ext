import {
  IsDivisibleBy,
  IsEmail,
  IsEnum,
  IsIn,
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
import {Presentation} from '../../../ng-bootstrap-ext/src/lib/forms/presentation.decorator';

export enum Gender {
  MALE = 'm',
  FEMALE = 'f',
  DIVERSE = 'd',
}

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

  @Presentation({
    control: 'textarea',
    description: 'Write something about yourself',
  })
  @IsString()
  bio?: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  age!: number;

  @IsEnum(Gender)
  gender!: Gender;

  @IsIn(['online', 'sleeping', 'do-not-disturb', 'invisible', 'offline'])
  status!: string;

  @IsNumber()
  @IsDivisibleBy(0.01)
  balance!: number;
}
