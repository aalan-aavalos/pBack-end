import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifAdmComponent } from './notif-adm.component';

describe('NotifAdmComponent', () => {
  let component: NotifAdmComponent;
  let fixture: ComponentFixture<NotifAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifAdmComponent]
    });
    fixture = TestBed.createComponent(NotifAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
