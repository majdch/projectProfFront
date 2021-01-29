import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private route : Router, private courseService : CourseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('_admin')!='true') this.route.navigate(['/Course']) ;
   
  }

  courses : any = [{
    "courseId": 1,
    "subjects": 1,
    "subjects_name": null,
    "created": "2021-01-29T09:23:35.965898Z",
    "archived": false,
    "courseName": "Cours JEE",
    "attachment": "assets/uploads/cour.pdf"
}];


}
