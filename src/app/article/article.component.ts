import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route : Router, private articleService : ArticleService) { }

  ngOnInit(): void {
    if(localStorage.getItem('_admin')!='true') this.route.navigate(['/Link']) ;
  
  }

  articles : any = [{
    "articleId": 1,
    "articleName": "articles a propos de la sécurité",
    "attachment": "https://cyware.com/cyber-security-news-articles",
    "content": "informations aprops de la cyber-security",
    "subjects": 6,
    "subjects_name": null,
    "created": "2021-01-29T09:00:29.406561800Z",
    "archived": false
}];


}
