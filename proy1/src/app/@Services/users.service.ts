import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../@Models/Users';

const httpOptions = {'content-type': 'application/json'}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  public getUsers(): Observable<Users> {
    const headers = httpOptions;
    // return this.http.get<Users>('https://api.github.com/users');
    return this.http.get<Users>('http://localhost:8080/api/v1/users', {headers});
  }
}
