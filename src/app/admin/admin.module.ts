import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { UserListComponent } from './user/list/user-list/user-list.component';
import { AddUserComponent } from './user/single-user/add-user/add-user.component';
import { UpdateUserComponent } from './user/single-user/update/update-user/update-user.component';
import { RoleListComponent } from './role/list/role-list/role-list.component';
import { SingleRoleComponent } from './role/single-role/single-role.component';
import { FonctionListComponent } from './fonction/list/fonction-list/fonction-list.component';
import { AddFonctionComponent } from './fonction/single-fonction/add-fonction/add-fonction.component';
import { UpdateFonctionComponent } from './fonction/single-fonction/update-fonction/update-fonction.component';
import { DepartementListComponent } from './departement/list/departement-list/departement-list.component';
import { AddDepartementComponent } from './departement/single-depatement/add-departement/add-departement.component';
import { UpdateDepartementComponent } from './departement/single-depatement/update-departement/update-departement.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent, UserListComponent, AddUserComponent, UpdateUserComponent, RoleListComponent, SingleRoleComponent, FonctionListComponent, AddFonctionComponent, UpdateFonctionComponent, DepartementListComponent, AddDepartementComponent, UpdateDepartementComponent]
})
export class AdminModule {}
