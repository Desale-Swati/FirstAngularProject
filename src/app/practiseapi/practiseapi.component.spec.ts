import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseapiComponent } from './practiseapi.component';

describe('PractiseapiComponent', () => {
  let component: PractiseapiComponent;
  let fixture: ComponentFixture<PractiseapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiseapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
