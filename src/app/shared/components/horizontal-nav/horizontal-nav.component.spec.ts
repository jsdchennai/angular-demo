import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNavComponent } from './horizontal-nav.component';

describe('HorizontalNavComponent', () => {
  let component: HorizontalNavComponent;
  let fixture: ComponentFixture<HorizontalNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalNavComponent]
    });
    fixture = TestBed.createComponent(HorizontalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
