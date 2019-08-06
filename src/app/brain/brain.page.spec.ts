import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainPage } from './brain.page';

describe('BrainPage', () => {
  let component: BrainPage;
  let fixture: ComponentFixture<BrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
