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
  public confirmado: any;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _ProductoService: ProductoService
  ){
    this.Titulo = "Listado de productos";
    this.confirmado = null;
  }

  onInit(){
    console.log('Productos-List.component.ts cargado')

    this.getProductos();
  }

  getProductos(){
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

  borrarConfrim(id: any){
    this.confirmado = id;
  }

  cancelarconfirm(){
    this.confirmado = null;
  }

  onDeleteProducto(id: any){
    this._ProductoService.deleteProducto(id).subscribe(
      Response => {
        //if(Response.code == 200){
          //this.getProductos();
        //}else{
          alert("Error al eliminar");
        }
      //},
      //error => {
        //console.log(<any>error);
      //}
    );
  }
}
