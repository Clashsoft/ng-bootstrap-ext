export interface InputProperties extends Partial<Pick<HTMLInputElement,
  | 'type'
  | 'min'
  | 'max'
  | 'step'
  | 'pattern'
  | 'required'
  //
>> {
  id: string;
  label: string;
}
