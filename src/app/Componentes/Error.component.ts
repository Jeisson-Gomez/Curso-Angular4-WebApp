import { Component } from "@angular/core";

@Component({
  selector: 'Error',
  template: '../Views/Error.html'
})

export class ErrorComponent {
  public Titulo: string;

  constructor(){
    this.Titulo = "Error!! página no Encontrada." ;
  }

  ngOnInit(){
    console.log("Componente Error.component.ts cargando");
  }
}
