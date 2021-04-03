import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-obj',
  templateUrl: './post-obj.component.html',
  styleUrls: ['./post-obj.component.css']
})
export class PostObjComponent implements OnInit {
  header: string = "Header text"
  content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  dateCreated: string = "today"
  author: string = "Ryan"
  constructor() { }

  ngOnInit(): void {
  }

}
