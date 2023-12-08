import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsrComponent } from './home-usr.component';

describe('HomeUsrComponent', () => {
  let component: HomeUsrComponent;
  let fixture: ComponentFixture<HomeUsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeUsrComponent]
    });
    fixture = TestBed.createComponent(HomeUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
