import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrainingAdminComponent } from './form-training-admin.component';

describe('FormTrainingAdminComponent', () => {
  let component: FormTrainingAdminComponent;
  let fixture: ComponentFixture<FormTrainingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTrainingAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTrainingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
