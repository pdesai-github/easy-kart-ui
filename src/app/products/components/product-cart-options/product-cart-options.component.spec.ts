import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartOptionsComponent } from './product-cart-options.component';

describe('ProductCartOptionsComponent', () => {
  let component: ProductCartOptionsComponent;
  let fixture: ComponentFixture<ProductCartOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCartOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCartOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
