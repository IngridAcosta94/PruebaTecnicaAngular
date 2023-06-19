
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authlayout',
  templateUrl: './authlayout.component.html',
  styleUrls: ['./authlayout.component.css']
})
export class AuthlayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("authlayout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("vodka-bg-auth");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("authlayout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

}
