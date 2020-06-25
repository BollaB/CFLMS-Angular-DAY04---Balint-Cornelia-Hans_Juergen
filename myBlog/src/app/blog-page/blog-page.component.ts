import { Component, OnInit } from '@angular/core';
import { posts} from '../posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.sass']
})
export class BlogPageComponent implements OnInit {
  posts = posts;

 increaseLikes(post) {
   post.likes++;
   post.buttonPressed++;
 }
 decreaseLikes(post) {
   post.likes--;
   post.buttonPressed--;
 }


  constructor() { }

  ngOnInit() {

  }

}
