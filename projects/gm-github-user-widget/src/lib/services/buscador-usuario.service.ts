import { Injectable } from '@angular/core';

// @ts-ignore
import * as api from 'proyecto-1b-api-github';
import {UsuarioInterface} from "../interfaces/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class BuscadorUsuarioService {

  obtenerDatosUsuario(nombreUsuario: string | undefined) :Promise<any>{
    return new Promise<any>((resolve, reject) => {
      api.obtenerDatosUsuario(nombreUsuario).then((data: UsuarioInterface) => {
        resolve(data)
      }).catch((error: any) => {
        resolve(error)
      })
    });
  }
}
