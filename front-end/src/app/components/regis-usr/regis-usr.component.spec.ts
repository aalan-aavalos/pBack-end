import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisUsrComponent } from './regis-usr.component';

describe('RegisUsrComponent', () => {
  let component: RegisUsrComponent;
  let fixture: ComponentFixture<RegisUsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisUsrComponent]
    });
    fixture = TestBed.createComponent(RegisUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
