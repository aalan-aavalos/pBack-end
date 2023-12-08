import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUsrComponent } from './sidebar-usr.component';

describe('SidebarUsrComponent', () => {
  let component: SidebarUsrComponent;
  let fixture: ComponentFixture<SidebarUsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarUsrComponent]
    });
    fixture = TestBed.createComponent(SidebarUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
