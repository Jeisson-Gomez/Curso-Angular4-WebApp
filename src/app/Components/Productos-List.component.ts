import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from "../Services/Producto.service";
import { Producto } from "../Models/Producto";

@Component({
  selector: 'Productos-List',
  templateUrl: '../Views/Productos-List.html',
  providers: [ ProductoService ]
})

export class ProductosListComponent{
  public Titulo: string;
  public productos: any = Producto;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _ProductoService: ProductoService
  ){
    this.Titulo = "Listado de productos"
  }

  onInit(){
    console.log('Productos-List.component.ts cargado')

    this._ProductoService.getProductos().subscribe(
      result =>{
        if(result.code != 200){
          console.log(result)
        }else{
          this.productos = result.data;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
