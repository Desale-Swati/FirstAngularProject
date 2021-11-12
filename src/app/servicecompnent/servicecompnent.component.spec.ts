import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecompnentComponent } from './servicecompnent.component';

describe('ServicecompnentComponent', () => {
  let component: ServicecompnentComponent;
  let fixture: ComponentFixture<ServicecompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecompnentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
