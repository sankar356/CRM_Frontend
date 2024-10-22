import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleadsComponent } from './viewleads.component';

describe('ViewleadsComponent', () => {
  let component: ViewleadsComponent;
  let fixture: ComponentFixture<ViewleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewleadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
