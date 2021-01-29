import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  url = "localhost:3000/"

  getAllUsers(){
    return this.http.get(`${this.url}/users`);
  }

}
