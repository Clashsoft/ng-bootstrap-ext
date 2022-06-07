import {Component, QueryList, ViewChildren} from '@angular/core';
import {ValidatorFormComponent} from 'ng-bootstrap-ext';
import {Person} from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  Person = Person;

  person = new Person();

  @ViewChildren(ValidatorFormComponent)
  forms!: QueryList<ValidatorFormComponent>;

  validate() {
    for (let form of this.forms) {
      form.validateAll();
    }
  }
}
