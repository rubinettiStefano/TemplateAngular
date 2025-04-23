import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDragoComponent } from './form-drago.component';

describe('FormDragoComponent', () => {
  let component: FormDragoComponent;
  let fixture: ComponentFixture<FormDragoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDragoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDragoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
