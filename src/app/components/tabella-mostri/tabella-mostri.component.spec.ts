import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaMostriComponent } from './tabella-mostri.component';

describe('TabellaMostriComponent', () => {
  let component: TabellaMostriComponent;
  let fixture: ComponentFixture<TabellaMostriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaMostriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaMostriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
