import {Component, Input, OnInit} from '@angular/core';
import {FormsService} from '../forms.service';
import {InputProperties} from '../input-properties.interface';

@Component({
  selector: 'ngbx-validator-form',
  templateUrl: './validator-form.component.html',
  styleUrls: ['./validator-form.component.css'],
})
export class ValidatorFormComponent implements OnInit {
  @Input() target!: Function;

  fields: InputProperties[] = [];

  constructor(
    private formsService: FormsService,
  ) {
  }

  ngOnInit(): void {
    this.fields = this.formsService.parse(this.target);
  }

}
