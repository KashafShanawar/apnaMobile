import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPhonesComponent } from './trending-phones.component';

describe('TrendingPhonesComponent', () => {
  let component: TrendingPhonesComponent;
  let fixture: ComponentFixture<TrendingPhonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingPhonesComponent]
    });
    fixture = TestBed.createComponent(TrendingPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
