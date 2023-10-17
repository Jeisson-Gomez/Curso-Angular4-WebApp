import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductoService } from "../Services/Producto.service";
import { Producto } from "../Models/Producto";

@Component({
  selector: 'Producto-add',
  templateUrl: '../Views/Producto-Add.html',
  providers: [ ProductoService ]
})

export class ProductoAddComponent{
  public titulo: string;

  constructor(){
    this.titulo = "Crear un nuevo Producto"
  }

  ngOnInit(){
    console.log('Producto-Add.component.ts cargando...')
  }
}
