import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 


        email:string=null;
        password:string=null;
        text:string=null;


    constructor(
        
        private router: Router,
        private http: HttpClient
    ) { }

    ngOnInit(): void{
       
    }

    login() {
        this.text=null;
        if(this.email != null && this.password != null){
        let url = 'http://localhost:8080/api/auth/login';
        this.http.post(url, {
            "email": this.email,
            "password": this.password
        }).subscribe((model:any) => {
            
             console.log('model');
             localStorage.setItem ('token' ,model.authenticationToken)
             localStorage.setItem  ('_admin' ,model._admin)
             localStorage.setItem  ('subject' ,model.subjects)
             localStorage.setItem  ('email' ,model.email)
              
             if(model._admin == true){
                this.router.navigate(['Prof'])
            }
            else if(model._admin == false){
                this.router.navigate(['Etudiant'])
            }
            else{
                this.router.navigate(['Home'])
            }
        }, (error) => {
            console.log(error.status)
            
                this.text="vos Information sont incorecte "
            }
            );
        }else{
                this.text="remplire toutes les informations "
            }
            this.email=null;
            this.password=null;
        }
    }
            
        
        
        


