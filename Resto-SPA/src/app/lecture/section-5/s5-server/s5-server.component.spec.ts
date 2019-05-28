/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { S5ServerComponent } from './s5-server.component';

describe('S5ServerComponent', () => {
  let component: S5ServerComponent;
  let fixture: ComponentFixture<S5ServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5ServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5ServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
