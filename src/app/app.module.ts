import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopBarModule} from '../@core/components/top-bar/top-bar.module';
import {BottomBarModule} from '../@core/components/bottom-bar/bottom-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    TopBarModule,
    BottomBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
