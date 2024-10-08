import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSplitChartComponent } from './area-split-chart.component';

describe('AreaSplitChartComponent', () => {
  let component: AreaSplitChartComponent;
  let fixture: ComponentFixture<AreaSplitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaSplitChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaSplitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
