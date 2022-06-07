import {
  IS_BOOLEAN,
  IS_DEFINED,
  IS_DIVISIBLE_BY,
  IS_EMAIL,
  IS_EMPTY,
  IS_HEX_COLOR,
  IS_INT,
  IS_MOBILE_PHONE,
  IS_NEGATIVE,
  IS_NOT_EMPTY,
  IS_NUMBER,
  IS_PHONE_NUMBER,
  IS_POSITIVE,
  IS_STRING,
  IS_URL,
  MAX,
  MAX_LENGTH,
  MIN,
  MIN_LENGTH,
  ValidationTypes,
} from 'class-validator';
import {InputType, Mapper} from './input-properties.interface';

export const TYPE_MAPPING: Record<string, InputType> = {
  [IS_BOOLEAN]: 'checkbox',
  [IS_STRING]: 'text',
  [IS_NUMBER]: 'number',
  [IS_HEX_COLOR]: 'color',
  [IS_EMAIL]: 'email',
  [IS_URL]: 'url',
  [IS_PHONE_NUMBER]: 'tel',
  [IS_MOBILE_PHONE]: 'tel',
};

export const COMMON_MAPPERS: Record<string, Mapper> = {
  [ValidationTypes.CONDITIONAL_VALIDATION]: (props) => props.required = false, // aka IsOptional
  [IS_DEFINED]: (props) => props.required = true,
  [IS_EMPTY]: (props) => props.pattern = '^$',
  [IS_NOT_EMPTY]: (props) => props.minLength = 1,
};

export const NUMBER_MAPPERS: Record<string, Mapper> = {
  [IS_DIVISIBLE_BY]: (props, step) => props.step = step,
  [IS_NEGATIVE]: (props) => props.max = 0,
  [IS_POSITIVE]: (props) => props.min = 0,
  [IS_INT]: (props) => {
    props.type = 'number';
    props.step = 1;
  },
  [MIN]: (props, min) => props.min = min,
  [MAX]: (props, max) => props.max = max,
};

export const STRING_MAPPERS: Record<string, Mapper> = {
  [IS_NOT_EMPTY]: (props) => props.required = true,
  [MIN_LENGTH]: (props, minLength) => props.minLength = minLength,
  [MAX_LENGTH]: (props, maxLength) => props.maxLength = maxLength,
};

export const MAPPERS: Record<string, Mapper> = {
  ...COMMON_MAPPERS,
  ...NUMBER_MAPPERS,
  ...STRING_MAPPERS,
};
