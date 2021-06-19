import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    // component: AdminComponent
    redirectTo: 'tables'
  },
  {
    path: 'tables',
    component: TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
