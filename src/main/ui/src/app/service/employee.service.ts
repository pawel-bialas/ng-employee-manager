import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/Employee";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/employee/findall');
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>( '/employee/add', employee);
  }

  public findEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>('/employee/find/' + id);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>('/employee/update', employee);
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>('/employee/delete/' + id);
  }
}
