/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { S5AppComponent } from './s5-app.component';

describe('S5AppComponent', () => {
  let component: S5AppComponent;
  let fixture: ComponentFixture<S5AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
