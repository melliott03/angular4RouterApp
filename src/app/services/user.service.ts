import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // Get all Users
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users') //http://regres.in/api/users  api/models/users.json
    .map(res => res.json());
  }

}
