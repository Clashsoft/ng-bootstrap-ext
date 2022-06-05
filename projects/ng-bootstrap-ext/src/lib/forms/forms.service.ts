import {Injectable} from '@angular/core';

import {
  getMetadataStorage,
  IS_DIVISIBLE_BY,
  IS_NEGATIVE, IS_NOT_EMPTY,
  IS_NUMBER,
  IS_POSITIVE,
  IS_STRING,
  MAX,
  MIN,
} from 'class-validator';
import {ValidationMetadata} from 'class-validator/types/metadata/ValidationMetadata';
import {InputProperties} from './input-properties.interface';

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
    switch (m.type) {
      case IS_STRING:
        props.type = 'text';
        break;
      case IS_NOT_EMPTY:
        props.required = true;
        break;
      case IS_NUMBER:
        props.type = 'number';
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
