
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import {HomeComponent} from './home/home.component'
import { LinkComponent } from './link/link.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { ProfComponent } from './prof/prof.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'Etudiant', component: EtudiantComponent },
  { path: 'Prof', component: ProfComponent },
  { path: 'Article', component: ArticleComponent },
  { path: 'Post', component: PostComponent },
  { path: 'Link', component: LinkComponent },
  { path: 'Course', component: CourseComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{}
