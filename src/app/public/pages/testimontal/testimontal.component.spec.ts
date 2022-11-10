import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimontalComponent } from './testimontal.component';

describe('TestimontalComponent', () => {
  let component: TestimontalComponent;
  let fixture: ComponentFixture<TestimontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
