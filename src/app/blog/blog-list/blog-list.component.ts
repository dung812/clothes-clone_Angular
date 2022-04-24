import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  stringHim = "Him clothes";
  stringHer = "Her clothes";
  constructor(private router: Router) { }

  shortcutTitle(str: string) {
    const result =  str.split(" ").slice(0,5);
    return [...result, "..."].join(" ");
  }

  ngOnInit(): void {
    const titleBlogs = document.querySelectorAll('.titleBlogs');
    titleBlogs.forEach(item => {
      item.textContent = this.shortcutTitle(item.textContent || "");
    })
  }

  routingDetail() {
    this.router.navigate(['blog-detail']);
  }
}
