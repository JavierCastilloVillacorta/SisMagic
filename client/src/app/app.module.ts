import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnavigatorComponent } from './component/web/cnavigator/cnavigator.component';
import { CcuerpoComponent } from './component/web/ccuerpo/ccuerpo.component';

import { WebService } from './services/web/web.service';
import { CinicioComponent } from './component/web/cinicio/cinicio.component';
import { CproductosComponent } from './component/web/cproductos/cproductos.component';
import { CcarritoComponent } from './component/web/ccarrito/ccarrito.component';
import { CcontactoComponent } from './component/web/ccontacto/ccontacto.component';
import { CloginComponent } from './component/web/clogin/clogin.component';
import { CmenuComponent } from './component/system/cmenu/cmenu.component';
import { CestablecimientosComponent } from './component/system/cestablecimientos/cestablecimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    CnavigatorComponent,
    CcuerpoComponent,
    CinicioComponent,
    CproductosComponent,
    CcarritoComponent,
    CcontactoComponent,
    CloginComponent,
    CmenuComponent,
    CestablecimientosComponent,
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
