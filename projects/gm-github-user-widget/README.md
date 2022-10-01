# Librería Github User Widget

Muestra la información de un usuario de Github haciendo uso de la librería de la API. La librería está desarrollada en Angular.

## Instrucciones

Hay que seguir las siguientes instrucciones para un correcto uso de la librería

### Instalación

```npm install gm-github-user-widget```

### Configuración

En el app.module.ts (por defecto) tenemos que importar el módulo de la librería **"GithubUserWidgetModule"**

```
import {GmGithubUserWidgetModule} from "../../projects/gm-github-user-widget/src/lib/gm-github-user-widget.module"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GmGithubUserWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Añadir estilos
En src/styles de la app principal importamos
```
@import './../node_modules/github-user-widget/lib/assets/styles/styles.css';
```
### Uso
* Con buscador
```
<gmGUW-buscador-usuario></gmGUW-buscador-usuario>
```

* Sin buscador
```
<gmGUW-usuarios></gmGUW-usuarios>
```
