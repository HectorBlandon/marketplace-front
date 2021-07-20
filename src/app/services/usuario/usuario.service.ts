import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /* variable encarga de obtner la URL para la conexion al API */
  public urlBase = environment.urlBase;

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { }

 /**
  * Servicio encargado de hacer la peticion http para la creacion de un producto
  * @param data objeto con la producto a crear
  * @returns objeto de tipo producto
  */
  public crearUsuario(data): any {
    return this.http.post(this.urlBase + '/usuario/crear-usuario', data);
  }
}
