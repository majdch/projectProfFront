import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  
  constructor(private http : HttpClient) { }

  url = "localhost:8080/api/article"

  getAllArticles(){
    return this.http.get(`${this.url}/article`);
  }

}
