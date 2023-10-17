import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Producto } from "../Models/Producto";
import { GLOBAL } from "./Global";

@Injectable()

export class ProductoService{
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url;
  }

  getProductos(): Observable<any>{
    return this._http.get(this.url + 'productos')
  }
}
