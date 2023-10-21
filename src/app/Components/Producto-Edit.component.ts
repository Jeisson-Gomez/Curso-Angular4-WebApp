import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductoService } from "../Services/Producto.service";
import { Producto } from '../Models/Producto';
import { ThisReceiver } from "@angular/compiler";
import { GLOBAL } from "../Services/Global";

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

  public id_edit;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Editar Producto';
    this.producto = new Producto (1, '', '', 1, '');
    this.id_edit = true;
  }

  ngOnInit(){
    console.log(this.titulo);
    this.getProducto();
  }

  onSubmit(){
    console.log(this.producto);

    if(this.filesToUpload.length >= 1){
      this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result: any) =>{
        console.log(result);

        this.producto.imagen = this.resultUpload.filename;
        this.saveProducto();

      },(error)=>{
        console.log(<any> error);
      });
    }else{
      this.saveProducto();
    }
  }

  saveProducto(){
    this._productoService.addProducto(this.producto).subscribe(
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
