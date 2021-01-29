import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from '../services/link.service';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  constructor(private route : Router, private linkService : LinkService) { }

  ngOnInit(): void {
    if(localStorage.getItem('_admin')!='true') this.route.navigate(['/Link']) ;
   
  }

  links : any = [{
    "linkId": 1,
    "linkName": "liens sur .Net",
    "url": "https://dotnet.microsoft.com/",
    "subjects": 5,
    "subjects_name": ".Net",
    "archived": false,
    "created": "2021-01-29T08:39:28.691794300Z"
}];


}
