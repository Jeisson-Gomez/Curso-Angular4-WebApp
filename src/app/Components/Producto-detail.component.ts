import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductoService } from "../Services/Producto.service";
import { Producto } from "../Models/Producto";

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
    console.log('Producto-Detail.component.ts cargando...')
  }
}
