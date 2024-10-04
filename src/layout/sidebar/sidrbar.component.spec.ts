import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidrbarComponent } from './sidrbar.component';

describe('SidrbarComponent', () => {
  let component: SidrbarComponent;
  let fixture: ComponentFixture<SidrbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidrbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidrbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
