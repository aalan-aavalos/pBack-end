import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivAdmComponent } from './activ-adm.component';

describe('ActivAdmComponent', () => {
  let component: ActivAdmComponent;
  let fixture: ComponentFixture<ActivAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivAdmComponent]
    });
    fixture = TestBed.createComponent(ActivAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
