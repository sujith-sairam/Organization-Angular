import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee/dialog/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/dialog/employee-edit/employee-edit.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerAddComponent } from './manager/dialog/manager-add/manager-add.component';
import { ManagerEditComponent } from './manager/dialog/manager-edit/manager-edit.component';

import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product/dialog/product-add/product-add.component';
import { ProductEditComponent } from './product/dialog/product-edit/product-edit.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/dialog/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/dialog/customer-edit/customer-edit.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentAddComponent } from './department/dialog/department-add/department-add.component';
import { DepartmentEditComponent } from './department/dialog/department-edit/department-edit.component';


@NgModule({
  declarations: [
    AppDashboardComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    ManagerComponent,
    ManagerAddComponent,
    ManagerEditComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    DepartmentComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
  
})
export class PagesModule {}
