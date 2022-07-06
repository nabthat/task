import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialAllModule } from '../material.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app/app.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAllModule,
    CoreModule,

    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
