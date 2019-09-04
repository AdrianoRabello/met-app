import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemiveryCostsComponent } from './demivery-costs.component';

describe('DemiveryCostsComponent', () => {
  let component: DemiveryCostsComponent;
  let fixture: ComponentFixture<DemiveryCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemiveryCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemiveryCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
