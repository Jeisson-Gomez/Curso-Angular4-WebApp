import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductoService } from "../Services/Producto.service";
import { Producto } from "../Models/Producto";
import { HttpParams, HttpResponse } from "@angular/common/http";

@Component({
  selector: 'Producto-Detail',
  templateUrl: '../Views/Producto-Detail.html',
  providers: [ ProductoService ]
})

export class ProductoDetailComponent{
  public Producto!: Producto;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    console.log('Producto-Detail.component.ts cargando...');

    this.getProducto();
  }

  getProducto(){
    this._route.params.forEach((params: Params) =>{
      let id = params['id'];
      type response = Response;

      let response: any = {
        code: 200,
        data: { /* ... */ }
      };

      this._productoService.getProducto(id).subscribe(
        response => {
          if(response == 200){
            //this.Producto = response.data;
          }else{
            this._router.navigate(['/productos']);
          }
        },
        error=>{
          console.log(<any>error);
        }
      )
    })
  }
}
