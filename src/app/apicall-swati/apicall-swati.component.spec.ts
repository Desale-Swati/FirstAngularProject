import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallSwatiComponent } from './apicall-swati.component';

describe('ApicallSwatiComponent', () => {
  let component: ApicallSwatiComponent;
  let fixture: ComponentFixture<ApicallSwatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicallSwatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicallSwatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
