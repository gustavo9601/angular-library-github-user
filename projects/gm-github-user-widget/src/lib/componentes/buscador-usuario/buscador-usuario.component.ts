import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gmGUW-buscador-usuario',
  templateUrl: './buscador-usuario.component.html',
  styles: []
})
export class BuscadorUsuarioComponent {

  textoBusqueda = '';
  buscando: boolean = false;

  buscar(key: any) {
    console.log("key: ", key);
    this.buscando = false;
    if (key.keyCode === 13) {
      // Vamos a buscar
      this.buscando = true;
    }
  }

}
