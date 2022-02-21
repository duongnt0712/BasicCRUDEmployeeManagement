import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuEmployeeComponent } from './cu-employee.component';

describe('CuEmployeeComponent', () => {
  let component: CuEmployeeComponent;
  let fixture: ComponentFixture<CuEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
