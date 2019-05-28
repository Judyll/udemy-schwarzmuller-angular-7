/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { S5CockpitComponent } from './s5-cockpit.component';

describe('S5CockpitComponent', () => {
  let component: S5CockpitComponent;
  let fixture: ComponentFixture<S5CockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5CockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5CockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
