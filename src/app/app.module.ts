import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home.Component';
import { ErrorComponent } from './Components/Error.component';
import { ProductoAddComponent } from "./Components/Producto-add.component";
import { ProductosListComponent } from './Components/Productos-List.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductoAddComponent,
    ProductosListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
