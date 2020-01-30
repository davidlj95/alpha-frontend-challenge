import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsListComponent } from './thoughts-list.component';

describe('ThoughtsListComponent', () => {
  let component: ThoughtsListComponent;
  let fixture: ComponentFixture<ThoughtsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
