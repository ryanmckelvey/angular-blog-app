import { Component, OnInit } from '@angular/core';
import { PostObjComponent } from '../post-obj/post-obj.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { IPost } from '../interfaces/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  postListObsv = this.db.collection<any>('blogs').valueChanges();
  postList: any[] = []

  ngOnInit(): void {
    this.postListObsv.subscribe(posts => { this.postList = posts; console.log(this.postList) })
  }

}
