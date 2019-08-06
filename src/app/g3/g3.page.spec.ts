import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G3Page } from './g3.page';

describe('G3Page', () => {
  let component: G3Page;
  let fixture: ComponentFixture<G3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
