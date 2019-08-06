import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B4TotPage } from './b4-tot.page';

describe('B4TotPage', () => {
  let component: B4TotPage;
  let fixture: ComponentFixture<B4TotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B4TotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B4TotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
