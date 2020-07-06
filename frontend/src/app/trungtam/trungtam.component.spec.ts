/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrungtamComponent } from './trungtam.component';

describe('TrungtamComponent', () => {
  let component: TrungtamComponent;
  let fixture: ComponentFixture<TrungtamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrungtamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrungtamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
