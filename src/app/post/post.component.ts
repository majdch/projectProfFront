import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 
  constructor(private route : Router, private postService : PostsService) { }

  ngOnInit(): void {
    if(localStorage.getItem('_admin')!='true') this.route.navigate(['/Link']) ;

  }

 posts : any = [{
  "postId": 1,
  "postName": "post sur .Net",
  "content": "cours de .NET",
  "subjects": 5,
  "subjects_name": ".NET",
  "archived": false,
  "created": "2021-01-29T08:29:48.484305100Z"
}];


  
}
