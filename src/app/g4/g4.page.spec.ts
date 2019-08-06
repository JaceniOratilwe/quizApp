import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G4Page } from './g4.page';

describe('G4Page', () => {
  let component: G4Page;
  let fixture: ComponentFixture<G4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
