import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';  //importing the new component
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent  //Adding the new component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
