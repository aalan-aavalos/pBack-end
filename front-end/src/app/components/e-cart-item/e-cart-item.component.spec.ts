import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECartItemComponent } from './e-cart-item.component';

describe('ECartItemComponent', () => {
  let component: ECartItemComponent;
  let fixture: ComponentFixture<ECartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECartItemComponent]
    });
    fixture = TestBed.createComponent(ECartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
