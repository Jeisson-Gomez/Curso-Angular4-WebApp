import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

//Componentes
import { HomeComponent } from "./Components/Home.Component";
import { ErrorComponent } from "./Components/Error.component";
import { ProductoAddComponent } from "./Components/Producto-Add.component";
import { ProductoDetailComponent } from "./Components/Producto-Detail.component"
import { ProductoEditComponent } from "./Components/Producto-Edit.component";
import { ProductosListComponent } from "./Components/Productos-List.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Crear-Producto', component: ProductoAddComponent },
  { path: 'Producto/:id', component: ProductoDetailComponent},
  { path: 'Productos', component: ProductosListComponent },
  { path: 'Editar-producto/:id', component: ProductoEditComponent },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
