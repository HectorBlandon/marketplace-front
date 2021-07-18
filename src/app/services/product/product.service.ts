import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category, Product } from '../../app.models';
import { environment } from 'src/environments/environment';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /* variable encarga de obtner la URL para la conexion al API */
  public urlBase = environment.urlBase;

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { }

 /**
  * Servicio encargado de hacer la peticion http para la creacion de un producto
  * @param data objeto con la producto a crear
  * @returns objeto de tipo producto
  */
  public crearProducto(data): any {
    return this.http.post(this.urlBase + '/producto/crear-producto', data);
  }
}
