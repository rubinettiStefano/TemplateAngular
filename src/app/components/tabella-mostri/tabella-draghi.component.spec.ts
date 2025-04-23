import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaDraghiComponent } from './tabella-draghi.component';

describe('TabellaMostriComponent', () => {
  let component: TabellaDraghiComponent;
  let fixture: ComponentFixture<TabellaDraghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaDraghiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaDraghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
