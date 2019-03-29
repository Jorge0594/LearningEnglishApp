import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordPage } from './add-word.page';

describe('AddWordPage', () => {
  let component: AddWordPage;
  let fixture: ComponentFixture<AddWordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
