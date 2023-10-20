import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductoService } from "../Services/Producto.service";
import { Producto } from "../Models/Producto";

import { GLOBAL } from "../Services/Global";

@Component({
  selector: 'Producto-add',
  templateUrl: '../Views/Producto-Add.html',
  providers: [ ProductoService ]
})

export class ProductoAddComponent{
  public titulo: string;
  public producto:any = Producto;

  public filesToUpload: any;
  public resultUpload: any;

  constructor(
    private _productoService: ProductoService,
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

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}
