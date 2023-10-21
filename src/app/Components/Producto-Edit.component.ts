import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductoService } from "../Services/Producto.service";
import { Producto } from '../Models/Producto';
import { ThisReceiver } from "@angular/compiler";

@Component({
  selector: 'Producto-Edit',
  templateUrl: '../views/Producto-Edit.html',
  providers: [ ProductoService ]
})

export class ProductoEditComponent{
  public titulo: string;
  public producto!: Producto;

  public filesToUpload: any;
  public resultUpload: any;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Editar Producto';
    this.producto = new Producto (1, '', '', 1, '');
  }

  ngOnInit(){
    console.log();
  }

  getProducto(){
    this._route.params.forEach((params: Params) => {
      let id = +params['id'];

      this._productoService.getProducto(id).subscribe(
        Response =>{
          /*if(Response.code == 200){
            this.producto = Response.data;
          }else{
            this._router.navigate(['/productos'])
          }*/
        },

        error => {
          console.error(<any>error);
        }
      );
    });
  }
}
