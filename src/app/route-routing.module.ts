import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'colores',
    loadChildren: () => import('./modules/wrapper-colores/wrapper-colores.module').then(m => m.WrapperColoresModule)
  },
  {
    path: '**',
    redirectTo: 'colores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule {
}
