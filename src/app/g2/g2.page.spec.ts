import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2Page } from './g2.page';

describe('G2Page', () => {
  let component: G2Page;
  let fixture: ComponentFixture<G2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
