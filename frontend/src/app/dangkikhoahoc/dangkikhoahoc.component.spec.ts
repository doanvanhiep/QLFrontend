/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DangkikhoahocComponent } from './dangkikhoahoc.component';

describe('DangkikhoahocComponent', () => {
  let component: DangkikhoahocComponent;
  let fixture: ComponentFixture<DangkikhoahocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkikhoahocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkikhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
