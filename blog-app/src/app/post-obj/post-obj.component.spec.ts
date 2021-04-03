import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostObjComponent } from './post-obj.component';

describe('PostObjComponent', () => {
  let component: PostObjComponent;
  let fixture: ComponentFixture<PostObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostObjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
