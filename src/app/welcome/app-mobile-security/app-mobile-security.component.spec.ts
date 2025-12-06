import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMobileSecurityComponent } from './app-mobile-security.component';

describe('AppMobileSecurityComponent', () => {
  let component: AppMobileSecurityComponent;
  let fixture: ComponentFixture<AppMobileSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMobileSecurityComponent]
    });
    fixture = TestBed.createComponent(AppMobileSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
