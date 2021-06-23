import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumativaUnidad2Component } from './sumativa-unidad2.component';

describe('SumativaUnidad2Component', () => {
  let component: SumativaUnidad2Component;
  let fixture: ComponentFixture<SumativaUnidad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumativaUnidad2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumativaUnidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
