import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioDragoComponent } from './dettaglio-drago.component';

describe('DettaglioDragoComponent', () => {
  let component: DettaglioDragoComponent;
  let fixture: ComponentFixture<DettaglioDragoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioDragoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioDragoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
