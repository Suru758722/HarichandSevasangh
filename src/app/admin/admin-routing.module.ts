import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerComponent } from './farmer/farmer.component';



const routes: Routes = [
  
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "farmer",
    component: FarmerComponent,
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

