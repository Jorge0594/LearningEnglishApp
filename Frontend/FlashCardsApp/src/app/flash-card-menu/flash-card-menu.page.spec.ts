import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardMenuPage } from './flash-card-menu.page';

describe('FlashCardMenuPage', () => {
  let component: FlashCardMenuPage;
  let fixture: ComponentFixture<FlashCardMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
