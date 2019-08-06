import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectbPage } from './correctb.page';

describe('CorrectbPage', () => {
  let component: CorrectbPage;
  let fixture: ComponentFixture<CorrectbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
