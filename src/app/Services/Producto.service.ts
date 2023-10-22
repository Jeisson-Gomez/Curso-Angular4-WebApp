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

  getProducto(id: any){
    return this._http.get(this.url+'producto/'+id);
  }

  addProducto(producto: Producto): Observable<any>{
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let HttpHeaders = new Headers({'content-type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'productos',params);
  }

  editProducto(id: any, producto: Producto){
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'update-producto/'+id, params, {headers: headers});
  }

  deleteProducto(id: any){
    return this._http.get(this.url+'eliminar-producto/'+id);
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
    return new Promise((resolve, reject)=>{
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for (var i = 0; i < files.length; i++){
        formData.append('uploads[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      };

      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }
}
