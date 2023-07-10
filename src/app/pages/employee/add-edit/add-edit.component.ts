import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/EmployeeService/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

interface IDepartment {
  id: number;
  departmentName: string;
}

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {

  employeeForm: FormGroup;

  departments: any[] = [];

  departmentMap: { [key: number]: string } = {};

  selectedDepartmentId: number | undefined;

  products: any[] = [];

  productMap: { [key: number]: string } = {};

  selectedProductId: number | undefined;

  roles: string[] = [
    'Developer',
    'HR',
    'Sales',
    'Marketing'
  ]

  constructor(
    private _formbuiler: FormBuilder,
    private _employeeService: EmployeeService,
    private _http: HttpClient,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.employeeForm = this._formbuiler.group({
      employeeName: '',
      employeeSalary: '',
      employeeAge: '',
      departmentID: '',
      productID: '',
    })
  }

  ngOnInit(): void {
    this.employeeForm.patchValue({
      name: this.data.employeeName,
      age: this.data.employeeAge,
      salary: this.data.employeeSalary,
      department: this.data.departmentID,
      product: this.data.productID
    });    

    this.fetchDepartments();
    this.fetchProducts();
    
  }

  fetchDepartments() {
    this._employeeService.FetchDepartments().subscribe(departments => {
      this.departments = departments.data;
      this.departments.forEach(department => {
        this.departmentMap[department.departmentID] = department.departmentName;
      });

      if (!this.selectedDepartmentId && this.departments.length > 0) {
        this.selectedDepartmentId = this.departments[0].departmentID;
      }
    });

  }

  fetchProducts() {
    this._employeeService.FetchProducts().subscribe(products => {
      this.products = products.data;
      this.products.forEach(product => {
        this.productMap[product.productID] = product.productName;
      });

      // Set selectedProductId to the first product
    if (!this.selectedProductId && this.products.length > 0) {
      this.selectedProductId = this.products[0].productID;
    }
    });
  }

  //onSubmit Method is invoked when the Submit Button is clicked
  onSubmit() {
    if (this.employeeForm.valid) {

      //Checks whether the data is present on the table
      if (this.data) {
        this._employeeService.UpdateEmployee(this.data.employeeID, this.employeeForm.value).subscribe({
          next: (val: any) => {
            console.log(this.data.employeeID);
            console.log(this.employeeForm.value);
            // this._coreService.openSnackBar('Employee details updated!');
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.error('Error updating employee details:', error);
            // Handle the error and show an error message to the user
          }
        });
        
      }
      // If data is not present then employee gets created
      else {
        this._employeeService.AddEmployee(this.employeeForm.value).subscribe({
          next: (val: any) => {
            // this._coreService.openSnackBar('Employee added successfully!');
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.error('Error updating employee details:', error);
            // Handle the error and show an error message to the user
          }
        })
      }
    }
  }
}

