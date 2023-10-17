import { Component } from "@angular/core";

@Component({
  selector: 'Home',
  templateUrl: '../Views/Home.html'
})

export class HomeComponent{
  public Titulo: string;

  constructor(){
    this.Titulo = 'Webapp de producto con angular 4';
  }

  ngOnInt(){
    console.log('Se a cargado el componente de Home.component.ts');
  }
}
