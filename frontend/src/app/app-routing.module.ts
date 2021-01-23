import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostOfficesComponent } from './post-offices/post-offices.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { AddEditOfficeComponent } from './post-offices/add-edit-office/add-edit-office.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post-offices',
    children: [
      { path: '', component: PostOfficesComponent },
      { path: 'add', component: AddEditOfficeComponent },
      { path: 'edit/:id', component: AddEditOfficeComponent },
    ]
  },
  { path: 'shipments', component: ShipmentsComponent },
  { path: '**', component: DashboardComponent },  // Redirect to the dashboard if route was not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
