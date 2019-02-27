import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnavigatorComponent } from './component/web/cnavigator/cnavigator.component';
import { CcuerpoComponent } from './component/web/ccuerpo/ccuerpo.component';

import { WebService } from './services/web/web.service'

@NgModule({
  declarations: [
    AppComponent,
    CnavigatorComponent,
    CcuerpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
