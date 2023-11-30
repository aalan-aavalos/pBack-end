import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECartComponent } from './e-cart.component';

describe('ECartComponent', () => {
  let component: ECartComponent;
  let fixture: ComponentFixture<ECartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECartComponent]
    });
    fixture = TestBed.createComponent(ECartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
