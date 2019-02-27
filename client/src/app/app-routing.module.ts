import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcuerpoComponent } from './component/web/ccuerpo/ccuerpo.component'
import { CnavigatorComponent } from './component/web/cnavigator/cnavigator.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/web',
    pathMatch: 'full'
  },
  {
    path: 'web',
    component: CcuerpoComponent
  },

  {
    path: 'ventas',
    component: CnavigatorComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
