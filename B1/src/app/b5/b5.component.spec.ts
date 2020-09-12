import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B5Component } from './b5.component';

describe('B5Component', () => {
  let component: B5Component;
  let fixture: ComponentFixture<B5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
