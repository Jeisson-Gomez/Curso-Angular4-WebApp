import { Component } from '@angular/core';
import { Gobal } from './Services/Global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Productos Angular 4';
  public header_color: string;

  constructor(){
    this.header_color = Gobal.header_color;
  }
}
