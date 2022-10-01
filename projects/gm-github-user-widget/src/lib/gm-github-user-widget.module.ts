import {NgModule} from '@angular/core';
import {UsuariosComponent} from './componentes/usuarios/usuarios.component';
import {BuscadorUsuarioComponent} from "./componentes/buscador-usuario/buscador-usuario.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UsuarioColorComponent} from "./componentes/usuario-color/usuario-color.component";

const COMPONENTES = [UsuariosComponent, BuscadorUsuarioComponent, UsuarioColorComponent];

@NgModule({
  declarations: COMPONENTES,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: COMPONENTES
})
export class GmGithubUserWidgetModule {
}
