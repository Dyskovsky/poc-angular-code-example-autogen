import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomeTestComponent } from './awesome-test.component';



@NgModule({
  declarations: [AwesomeTestComponent],
  exports: [AwesomeTestComponent],
  imports: [
    CommonModule
  ]
})
export class AwesomeTestModule { }
