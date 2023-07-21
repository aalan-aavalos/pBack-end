import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUsrComponent } from './cal-usr.component';

describe('CalUsrComponent', () => {
  let component: CalUsrComponent;
  let fixture: ComponentFixture<CalUsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalUsrComponent]
    });
    fixture = TestBed.createComponent(CalUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
