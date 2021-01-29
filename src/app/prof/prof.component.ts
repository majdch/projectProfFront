import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  constructor(private route : Router, private userService : UserServiceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('_admin')!='true') this.route.navigate(['/Etudiant']) ;
    this.getUsers();
  }

  etudiants : any = [
    {
        "studentId": 1,
        "studentName": "majd",
        "email": "majd5@gmail.com",
        "subjects_name": "JEE",
        "subjects_id": 1,
        "created": "2021-01-29T04:46:54Z",
        "enabled": true,
        "unexpired": true,
        "_admin": true
    }
];

  getUsers(){
    this.userService.getAllUsers().subscribe(res=>{
      this.etudiants=res;
      console.log(this.etudiants);
    })
  }

}
