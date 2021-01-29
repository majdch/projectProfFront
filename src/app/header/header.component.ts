import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userActuel = null ;
  roleActuel = '';

  constructor(
    private account : AuthService , 
    private tokenService : TokenService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.account.isAuth.subscribe( res => {
      this.userActuel = this.tokenService.getInfos();
      this.roleActuel = this.tokenService.getRole();
    });
  }


  logout(){
    this.tokenService.remove();
    this.account.changeStatut(false);
    this.router.navigateByUrl("/login");

  }

}