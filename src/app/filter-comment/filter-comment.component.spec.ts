import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCommentComponent } from './filter-comment.component';

describe('FilterCommentComponent', () => {
  let component: FilterCommentComponent;
  let fixture: ComponentFixture<FilterCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCommentComponent]
    });
    fixture = TestBed.createComponent(FilterCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
