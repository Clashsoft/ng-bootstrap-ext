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

  fields: InputProperties[] = [];

  errors: Record<string, string[]> = {};

  constructor(
    private formsService: FormsService,
  ) {
  }

  ngOnInit(): void {
    this.fields = this.formsService.parse(this.target || this.object.constructor);
  }

  change(property: string): void {
    validate(this.object).then(errors => {
      let error = errors.find(e => e.property === property);
      this.errors[property] = Object.values(error?.constraints || {});
    });
  }
}
