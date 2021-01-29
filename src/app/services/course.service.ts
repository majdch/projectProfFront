import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  constructor(private http : HttpClient) { }

  url = "localhost:8080/api/course"

  getAllCourses(){
    return this.http.get(`${this.url}/course`);
  }

}
