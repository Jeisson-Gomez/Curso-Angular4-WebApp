import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

//Componentes
import { HomeComponent } from "./Componentes/Home.Component";
import { ErrorComponent } from "./Componentes/Error.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Error', component: ErrorComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
