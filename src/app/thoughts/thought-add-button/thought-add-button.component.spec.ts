import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtAddButtonComponent } from './thought-add-button.component';

describe('ThoughtAddButtonComponent', () => {
  let component: ThoughtAddButtonComponent;
  let fixture: ComponentFixture<ThoughtAddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtAddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
