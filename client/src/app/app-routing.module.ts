import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcuerpoComponent } from './component/web/ccuerpo/ccuerpo.component';
//Componentes - Web
import { CnavigatorComponent } from './component/web/cnavigator/cnavigator.component';
import { CinicioComponent } from './component/web/cinicio/cinicio.component';
import { CproductosComponent } from './component/web/cproductos/cproductos.component'
import { CcarritoComponent } from './component/web/ccarrito/ccarrito.component';
import { CcontactoComponent } from './component/web/ccontacto/ccontacto.component';
import { CloginComponent } from './component/web/clogin/clogin.component';


// Componentes - Sistema
import { CmenuComponent } from './component/system/cmenu/cmenu.component';
import { CestablecimientosComponent } from './component/system/cestablecimientos/cestablecimientos.component';

const routes: Routes = [
  // Rutas web
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'inicio', component: CinicioComponent },
  { path: 'productos', component: CproductosComponent },
  { path: 'carrito',component: CcarritoComponent },
  { path: 'contacto', component: CcontactoComponent },
  { path: 'login', component: CloginComponent },

  // Rutas Sistema
  { path: 'dashboard', component: CestablecimientosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
