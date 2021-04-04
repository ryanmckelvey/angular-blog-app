import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-post-obj',
  templateUrl: './post-obj.component.html',
  styleUrls: ['./post-obj.component.css']
})
export class PostObjComponent implements OnInit {
  @Input() inputPost: IPost | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
