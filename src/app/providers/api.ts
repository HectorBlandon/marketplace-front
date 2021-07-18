import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class Api {

  private _configuracion;

  constructor() {
    this.initConfiguracion();
  }

  /* private getBaseUrl(){
    return environment.baseUrl;
  } */

  private initConfiguracion() {
    this._configuracion = {
      url: 'http://localhost:3000'      
    }
  }

  public get getBaseUrl(): IConfig{
    return this._configuracion;
  }

}

export interface IConfig {
  url: string;
  urlBase: string;
}
