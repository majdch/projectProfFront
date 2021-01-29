import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  set(data : any){
    localStorage.setItem('token' , data.token);
    localStorage.setItem('email', data.email);
    localStorage.setItem('_admin', data.admin);
    localStorage.setItem('subject', data.subject);

  }

  handle(data){
    this.set(data);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getEmail(){
    return localStorage.getItem('email');
  }

  getRole(){
    return localStorage.getItem('_admin');
  }

  getSubject(){
    return localStorage.getItem('subject');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('subject');
    localStorage.removeItem('_admin');
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  isValid(){
    const token = this.getToken();
    const email = this.getEmail();

    if(token){
      const payload = this.payload(token);
      if(payload){
        return email == payload.sub;
      }
    }
    return false;
  }


  getInfos(){
    const token = this.getToken();
    if(token){
      const payload = this.payload(token);
      return payload ? payload : null
    }
    return null ;
  }


  loggedIn(){
    return this.isValid();
  }
}
