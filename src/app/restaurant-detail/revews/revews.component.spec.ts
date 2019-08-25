import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevewsComponent } from './revews.component';

describe('RevewsComponent', () => {
  let component: RevewsComponent;
  let fixture: ComponentFixture<RevewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
