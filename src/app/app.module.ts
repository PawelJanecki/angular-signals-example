import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetUpdateReadComponent } from './set-update-read/set-update-read.component';
import { ArrayObjectComponent } from './array-object/array-object.component';
import { ReadonlyComponent } from './readonly/readonly.component';
import { NoOneComponent } from './multiple-components-use-case/no-one/no-one.component';
import { NoTwoComponent } from './multiple-components-use-case/no-two/no-two.component';
import { ParentComponent } from './a18v/parent/parent.component';
import { ChildOneComponent } from './a18v/children/child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    SetUpdateReadComponent,
    ArrayObjectComponent,
    ReadonlyComponent,
    NoOneComponent,
    NoTwoComponent,
    ParentComponent,
    ChildOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
