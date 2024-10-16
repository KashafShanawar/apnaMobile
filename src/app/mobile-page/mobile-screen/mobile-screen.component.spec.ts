import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileScreenComponent } from './mobile-screen.component';

describe('MobileScreenComponent', () => {
  let component: MobileScreenComponent;
  let fixture: ComponentFixture<MobileScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileScreenComponent]
    });
    fixture = TestBed.createComponent(MobileScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
