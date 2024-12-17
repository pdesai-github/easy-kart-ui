import { TestBed } from '@angular/core/testing';

import { ProductListServiceService } from './product-list-service.service';

describe('ProductListServiceService', () => {
  let service: ProductListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
