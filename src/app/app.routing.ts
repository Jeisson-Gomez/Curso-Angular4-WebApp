import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

//Componentes
import { HomeComponent } from "./Components/Home.Component";
import { ErrorComponent } from "./Components/Error.component";
import { ProductosListComponent } from "./Components/Productos-List.component";
import { ProductoAddComponent } from "./Components/Producto-add.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Productos', component: ProductosListComponent },
  { path: 'Crear-Productos', component: ProductoAddComponent},
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
