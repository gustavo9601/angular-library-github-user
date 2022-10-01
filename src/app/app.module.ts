import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GmGithubUserWidgetModule} from "../../projects/gm-github-user-widget/src/lib/gm-github-user-widget.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GmGithubUserWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
