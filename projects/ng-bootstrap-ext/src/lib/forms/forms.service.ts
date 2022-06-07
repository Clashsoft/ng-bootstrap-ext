import {Injectable} from '@angular/core';

import {getMetadataStorage} from 'class-validator';
import {ValidationMetadata} from 'class-validator/types/metadata/ValidationMetadata';
import {MAPPERS, TYPE_MAPPING} from './forms.constants';
import {InputProperties, InputType} from './input-properties.interface';


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
        pattern: '',
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
    if (m.name in TYPE_MAPPING) {
      props.type = TYPE_MAPPING[m.name];
    }

    if (m.name in MAPPERS) {
      MAPPERS[m.name](props, ...(m.constraints ?? []));
    }
  }

  coerce(type: InputType, value: any) {
    switch (type) {
      case 'checkbox':
        return value === 'true';
      case 'number':
        return +value;
      default:
        return value;
    }
  }
}
