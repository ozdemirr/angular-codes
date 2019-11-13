import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnaltComponent } from './enalt.component';

describe('EnaltComponent', () => {
  let component: EnaltComponent;
  let fixture: ComponentFixture<EnaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
