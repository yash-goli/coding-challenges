import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesTaskComponent } from './pipes-task.component';

@NgModule({
  declarations: [
    PipesTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesTaskComponent
  ]
})
export class PipesTaskModule { }
