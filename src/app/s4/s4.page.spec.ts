import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4Page } from './s4.page';

describe('S4Page', () => {
  let component: S4Page;
  let fixture: ComponentFixture<S4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
