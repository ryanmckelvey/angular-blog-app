import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-obj',
  templateUrl: './post-obj.component.html',
  styleUrls: ['./post-obj.component.css']
})
export class PostObjComponent implements OnInit {
  header: string = "Header text"
  content: string = "Content text here lorum ipsum doler set"
  dateCreated: string = "today"
  author: string = "Ryan"
  constructor() { }

  ngOnInit(): void {
  }

}
