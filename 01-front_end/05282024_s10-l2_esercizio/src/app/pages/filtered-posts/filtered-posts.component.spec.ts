import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPostsComponent } from './filtered-posts.component';

describe('FilteredPostsComponent', () => {
  let component: FilteredPostsComponent;
  let fixture: ComponentFixture<FilteredPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteredPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
