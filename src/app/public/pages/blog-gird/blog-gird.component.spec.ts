import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGirdComponent } from './blog-gird.component';

describe('BlogGirdComponent', () => {
  let component: BlogGirdComponent;
  let fixture: ComponentFixture<BlogGirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
