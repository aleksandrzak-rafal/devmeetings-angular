import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoProductListComponent } from './promo-product-list.component';

describe('PromoProductListComponent', () => {
  let component: PromoProductListComponent;
  let fixture: ComponentFixture<PromoProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
