import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivComponent } from './activ.component';

describe('ActivComponent', () => {
  let component: ActivComponent;
  let fixture: ComponentFixture<ActivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivComponent]
    });
    fixture = TestBed.createComponent(ActivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
