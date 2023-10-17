import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

//Componentes
import { HomeComponent } from "./Componentes/Home.Component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
