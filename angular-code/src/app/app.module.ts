import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PipesTaskModule } from './modules/pipes-task/pipes-task.module';
import { RepeaterTaskModule } from './modules/repeater-task/repeater-task.module';
import { CustomSortPipe } from './shared/pipes/custom-sort.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipesTaskModule,
    RepeaterTaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
