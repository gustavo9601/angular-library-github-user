import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// En Desarrollo
// import {GmGithubUserWidgetModule} from "../../projects/gm-github-user-widget/src/lib/gm-github-user-widget.module";

// Libreria compilada
import {GmGithubUserWidgetModule} from "gm-github-user-widget";
import {RouteRoutingModule} from "./route-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GmGithubUserWidgetModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
