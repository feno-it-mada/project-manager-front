import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {TablesComponent} from '../tables/tables/tables.component';
import {UserServiceService} from '../../service/user/user-service.service';



@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  declarations: [TablesComponent],
  providers: [UserServiceService]
})
export class UserModule { }
