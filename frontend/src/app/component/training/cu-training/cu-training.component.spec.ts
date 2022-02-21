import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuTrainingComponent } from './cu-training.component';

describe('CuTrainingComponent', () => {
  let component: CuTrainingComponent;
  let fixture: ComponentFixture<CuTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
