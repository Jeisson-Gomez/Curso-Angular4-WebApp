import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'Productos-List',
  templateUrl: '../Views/Productos-List.html'
})

export class ProductosListComponent{
  public Titulo: string;

  constructor(
    private _route: ActivatedRoute,
    private router:Router
  ){
    this.Titulo = "Listado de productos"
  }

  onInit(){
    console.log('Productos-List.component.ts cargado')
  }
}
