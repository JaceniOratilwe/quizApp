import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3Page } from './s3.page';

describe('S3Page', () => {
  let component: S3Page;
  let fixture: ComponentFixture<S3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
