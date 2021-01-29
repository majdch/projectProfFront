import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('_admin')=='true') this.route.navigate(['/Prof']) 
  }

}
