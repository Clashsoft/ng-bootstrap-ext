import {Injectable} from '@angular/core';

import {
  getMetadataStorage,
  IS_BOOLEAN,
  IS_DIVISIBLE_BY,
  IS_EMAIL,
  IS_HEX_COLOR,
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
import {ValidationMetadata} from 'class-validator/types/metadata/ValidationMetadata';
import {InputProperties, InputType} from './input-properties.interface';

const TYPE_MAPPING: Record<string, InputType> = {
  [IS_BOOLEAN]: 'checkbox',
  [IS_STRING]: 'text',
  [IS_NUMBER]: 'number',
  [IS_HEX_COLOR]: 'color',
  [IS_EMAIL]: 'email',
  [IS_URL]: 'url',
  [IS_PHONE_NUMBER]: 'tel',
  [IS_MOBILE_PHONE]: 'tel',
};

@Injectable({
  providedIn: 'root',
})
export class FormsService {

  constructor() {
  }

  parse(ctor: Function): InputProperties[] {
    let storage = getMetadataStorage();
    let metadata = storage.getTargetValidationMetadatas(ctor, ctor.name, false, false);
    let grouped = storage.groupByPropertyName(metadata);
    return Object.entries(grouped).map(([key, metadata]) => {
      const props: InputProperties = {
        id: key,
        label: key,
        type: 'text',
        required: true,
        pattern: null,
        minLength: 0,
        maxLength: 512 * 1024,
        max: null,
        min: null,
        step: null,
      };
      for (let m of metadata) {
        this.translateMetadata(m, props);
      }
      return props;
    });
  }

  private translateMetadata(m: ValidationMetadata, props: InputProperties) {
    if (m.type in TYPE_MAPPING) {
      props.type = TYPE_MAPPING[m.type];
      return;
    }

    switch (m.type) {
      case ValidationTypes.CONDITIONAL_VALIDATION:
        props.required = false;
        break;
      case IS_NOT_EMPTY:
        props.minLength ||= 1;
        break;
      case MIN_LENGTH:
        props.minLength ||= m.constraints[0];
        break;
      case MAX_LENGTH:
        props.maxLength ||= m.constraints[0];
        break;
      case MIN:
        props.min ||= m.constraints[0];
        break;
      case MAX:
        props.max ||= m.constraints[0];
        break;
      case IS_POSITIVE:
        props.min ||= 0;
        break;
      case IS_NEGATIVE:
        props.max ||= 0;
        break;
      case IS_DIVISIBLE_BY:
        props.step ||= m.constraints[0];
        break;
    }
  }
}
