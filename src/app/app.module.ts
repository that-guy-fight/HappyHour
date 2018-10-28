import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BodyComponentComponent } from './body-component/body-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
