import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {UserListComponent} from './user/list/user-list/user-list.component';
import {AddUserComponent} from './user/single-user/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'user',
        component: UserListComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'mat-grid',
        loadChildren: () => import('./mat-grid/mat-grid.module').then(m => m.MatGridModule)
      },
      {
        path: 'mat-components',
        loadChildren:
          () => import('./mat-components/mat-components.module').then(m => m.MatComponentsModule)
      },
      {
        path: 'animations',
        loadChildren:
          () => import('./animations/animations.module').then(m => m.AnimationsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
