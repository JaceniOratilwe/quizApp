import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectGPage } from './correct-g.page';

describe('CorrectGPage', () => {
  let component: CorrectGPage;
  let fixture: ComponentFixture<CorrectGPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectGPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
