import {Injectable} from '@angular/core';
import {Employee} from './employee.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  list: Employee[];
  private readonly API_URL = 'http://localhost:8080/employees/';

  constructor(private http: HttpClient) {
  }

  postEmployee(formData: Employee) {
    return this.http.post(this.API_URL, formData);
  }

  refreshList() {
    this.http.get(this.API_URL).toPromise().then(res => this.list = res as Employee[]);
  }

  putEmployee(formData: Employee) {
    return this.http.put(this.API_URL + formData.id, formData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.API_URL + id);
  }
}
