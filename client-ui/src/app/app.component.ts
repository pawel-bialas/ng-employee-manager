import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./service/employee.service";
import {Employee} from "./model/Employee";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Employee Manager Demo';
  public employees: Employee[] = [];
  public editEmployee: Employee | null;
  public deleteEmployee: Employee | null;


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees();

  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe((response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      })
  }

  public getEmployee(): void {

  }

  public onModalOpen(employee: Employee | null, option: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (option === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal')
    }
    if (option === 'update') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal')
    }
    if (option === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal')
    }
    container?.appendChild(button);
    button.click();
  }


  onAddEmployee(addForm: NgForm): void {
    let dismiss = document.getElementById('add-employee-form');
    if (dismiss) {
      dismiss.click();
    }
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
          console.log(response);
          this.getEmployees();
          addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  };

  onUpdateEmployee(employee: Employee): void {
    JSON.stringify(employee);
    let dismiss = document.getElementById('update-employee-form');
    if (dismiss) {
      dismiss.click();
    }
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onDeleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
