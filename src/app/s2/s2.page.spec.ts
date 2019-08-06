import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2Page } from './s2.page';

describe('S2Page', () => {
  let component: S2Page;
  let fixture: ComponentFixture<S2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
