import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProductItemComponent } from './e-product-item.component';

describe('EProductItemComponent', () => {
  let component: EProductItemComponent;
  let fixture: ComponentFixture<EProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EProductItemComponent]
    });
    fixture = TestBed.createComponent(EProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
