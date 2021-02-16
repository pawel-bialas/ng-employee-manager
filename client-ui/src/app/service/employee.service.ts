import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServiceUrl = '';

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('${this.apiServiceUrl}/employee/findAll');
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('${this.apiServiceUrl}/employee/add', employee);
  }

  public findEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>('${this.apiServiceUrl}/employee/find/' + id);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>('${this.apiServiceUrl}/employee/update', employee);
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>('${this.apiServiceUrl}/employee/delete/' + id);
  }
}
