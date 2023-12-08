import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLecComponent } from './sidebar-lec.component';

describe('SidebarLecComponent', () => {
  let component: SidebarLecComponent;
  let fixture: ComponentFixture<SidebarLecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarLecComponent]
    });
    fixture = TestBed.createComponent(SidebarLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
