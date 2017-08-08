import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RiversService } from './rivers.service';

import { AppComponent } from './app.component';
import { RiversComponent } from './rivers/rivers.component';

@NgModule({
  declarations: [
    AppComponent,
    RiversComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RiversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
