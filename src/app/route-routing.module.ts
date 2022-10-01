import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'colores',
    loadChildren: () => import('./../../projects/gm-github-user-widget/src/lib/colores/colores.module').then(m => m.ColoresModule)
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
