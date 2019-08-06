import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G1Page } from './g1.page';

describe('G1Page', () => {
  let component: G1Page;
  let fixture: ComponentFixture<G1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
