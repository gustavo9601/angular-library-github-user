import {Component, Input, OnInit} from '@angular/core';
import {UsuarioInterface} from "../../interfaces/usuario.interface";
import {USUARIO_API} from "../../constants/usuario";
import {BuscadorUsuarioService} from "../../services/buscador-usuario.service";

@Component({
  selector: 'gmGUW-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  @Input() busqueda: string | undefined = undefined;
  usuario: UsuarioInterface;

  constructor(private buscadorUsuarioService: BuscadorUsuarioService) {
    this.usuario = USUARIO_API;

  }

  ngOnInit(): void {
    if (this.busqueda === undefined || this.busqueda === '') {
      console.log("Usando la constante de usuario");
      this.usuario = USUARIO_API;
    } else {
      this.buscadorUsuarioService.obtenerDatosUsuario(this.busqueda)
        .then((data: UsuarioInterface) => {
          console.log("Datos retornados api: ", data);
          this.usuario = data;
        });
    }
  }

}
