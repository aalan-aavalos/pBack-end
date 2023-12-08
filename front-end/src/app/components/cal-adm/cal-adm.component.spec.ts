import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalAdmComponent } from './cal-adm.component';

describe('CalAdmComponent', () => {
  let component: CalAdmComponent;
  let fixture: ComponentFixture<CalAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalAdmComponent]
    });
    fixture = TestBed.createComponent(CalAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
