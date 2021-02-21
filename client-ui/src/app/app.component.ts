import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./service/employee.service";
import {Employee} from "./model/Employee";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Employee Manager Demo';
  public employees: Employee[] = [];


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


}
