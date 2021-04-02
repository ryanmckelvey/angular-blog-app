import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public x: any

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    this.x = document.getElementById("nav");
    if (this.x.className === "nav-class") {
      this.x.className += " responsive";
    } else {
      this.x.className = "nav-class";
    }
  }
}
