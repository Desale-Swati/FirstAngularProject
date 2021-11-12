import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyelBindingComponent } from './styel-binding.component';

describe('StyelBindingComponent', () => {
  let component: StyelBindingComponent;
  let fixture: ComponentFixture<StyelBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyelBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyelBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
