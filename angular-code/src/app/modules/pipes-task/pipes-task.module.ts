import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesTaskComponent } from './pipes-task.component';
import { CustomSortPipe } from 'src/app/shared/pipes/custom-sort.pipe';

@NgModule({
  declarations: [
    PipesTaskComponent,
    CustomSortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesTaskComponent
  ]
})
export class PipesTaskModule { }
