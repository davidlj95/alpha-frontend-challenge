import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtAddComponent } from './thought-add.component';

describe('ThoughtAddComponent', () => {
  let component: ThoughtAddComponent;
  let fixture: ComponentFixture<ThoughtAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
