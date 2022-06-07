// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types
export type InputType =
  // | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  // | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  // | 'reset'
  // | 'search'
  // | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
;

export interface InputProperties {
  id: string;
  label: string;

  type: InputType;
  required: boolean;

  options?: any[];

  // number
  min: number | null;
  max: number | null;
  step: number | null;

  // text
  pattern: string | RegExp;
  minLength: number;
  maxLength: number;
}

export type Mapper = (props: InputProperties, ...constraints: any[]) => void;
