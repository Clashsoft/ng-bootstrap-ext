import {Component, Input, OnInit} from '@angular/core';
import {validate} from 'class-validator';
import {FormsService} from '../forms.service';
import {InputProperties} from '../input-properties.interface';

@Component({
  selector: 'ngbx-validator-form',
  templateUrl: './validator-form.component.html',
  styleUrls: ['./validator-form.component.css'],
})
export class ValidatorFormComponent implements OnInit {
  @Input() target?: Function;
  @Input() object: any;
  @Input() pick?: string[];

  fields: InputProperties[] = [];

  errors: Record<string, string[]> = {};

  constructor(
    private formsService: FormsService,
  ) {
  }

  ngOnInit(): void {
    this.fields = this.formsService.parse(this.target || this.object.constructor, this.pick);
  }

  validate(field: InputProperties): void {
    let property = field.id;
    this.object[property] = this.formsService.coerce(field.type, this.object[property]);

    validate(this.object).then(errors => {
      let error = errors.find(e => e.property === property);
      this.errors[property] = Object.values(error?.constraints || {});
    });
  }
}
