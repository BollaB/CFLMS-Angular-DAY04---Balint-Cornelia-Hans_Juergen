import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { BlogPageComponent} from './blog-page/blog-page.component';
import { ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { path: '', component: BlogPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
