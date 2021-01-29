import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { ProfComponent } from './prof/prof.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from './post/post.component';
import { LinkComponent } from './link/link.component';
import { CourseComponent } from './course/course.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ProfComponent,
    EtudiantComponent,
    ArticleComponent,
    PostComponent,
    LinkComponent,
    CourseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
