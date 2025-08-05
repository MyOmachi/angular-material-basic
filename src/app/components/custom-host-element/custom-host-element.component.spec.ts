import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHostElementComponent } from './custom-host-element.component';

describe('CustomHostElementComponent', () => {
  let component: CustomHostElementComponent;
  let fixture: ComponentFixture<CustomHostElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHostElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHostElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
