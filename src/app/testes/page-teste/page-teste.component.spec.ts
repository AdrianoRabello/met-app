import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTesteComponent } from './page-teste.component';

describe('PageTesteComponent', () => {
  let component: PageTesteComponent;
  let fixture: ComponentFixture<PageTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
