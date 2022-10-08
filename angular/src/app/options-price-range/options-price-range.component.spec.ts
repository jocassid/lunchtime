import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPriceRangeComponent } from './options-price-range.component';

describe('OptionsPriceRangeComponent', () => {
  let component: OptionsPriceRangeComponent;
  let fixture: ComponentFixture<OptionsPriceRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsPriceRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
