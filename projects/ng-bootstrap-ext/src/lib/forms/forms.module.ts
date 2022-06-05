import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ValidatorFormComponent} from './validator-form/validator-form.component';


@NgModule({
  declarations: [
    ValidatorFormComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ValidatorFormComponent,
  ],
})
export class FormsModule {
}
