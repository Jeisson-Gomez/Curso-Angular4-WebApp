import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from "../Services/Producto.service";

@Component({
  selector: 'Productos-List',
  templateUrl: '../Views/Productos-List.html',
  providers: [ProductoService]
})

export class ProductosListComponent{
  public Titulo: string;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _ProductoService: ProductoService
  ){
    this.Titulo = "Listado de productos"
  }

  onInit(){
    console.log('Productos-List.component.ts cargado')

    alert(this._ProductoService.getProductos());
  }
}
