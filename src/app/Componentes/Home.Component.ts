import { Component } from "@angular/core";

@Component({
  selector: 'Home',
  templateUrl: '../Views/Home.html'
})

export class HomeComponent{
  public titulo: string;

  constructor(){
    this.titulo = 'Pagina Principal'
  }

  ngOnInt(){}
}
