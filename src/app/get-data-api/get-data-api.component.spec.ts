import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataApiComponent } from './get-data-api.component';

describe('GetDataApiComponent', () => {
  let component: GetDataApiComponent;
  let fixture: ComponentFixture<GetDataApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
