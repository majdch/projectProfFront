import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http : HttpClient) { }

  url = "localhost:8080/api/link"

  getAllUsers(){
    return this.http.get(`${this.url}/link`);
  }

}
