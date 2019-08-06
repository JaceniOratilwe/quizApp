import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1Page } from './s1.page';

describe('S1Page', () => {
  let component: S1Page;
  let fixture: ComponentFixture<S1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
