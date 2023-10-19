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
  public producto:any = Producto;

  constructor(
    private _ProductoService: ProductoService,
    private _router: Router
  ){
    this.titulo = "Crear un nuevo Producto"
    this.producto = new Producto(0, '', '', 0, '');
  }

  ngOnInit(){
    console.log('Producto-Add.component.ts cargando...')
  }

  onSubmit(){
    console.log(this.producto);

    this._ProductoService.addProducto(this.producto).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/Productos']);
        }else{
          console.log(response);
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }
}
