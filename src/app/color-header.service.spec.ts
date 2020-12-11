import { TestBed } from '@angular/core/testing';

import { ColorHeaderService } from './color-header.service';

describe('ColorHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorHeaderService = TestBed.get(ColorHeaderService);
    expect(service).toBeTruthy();
  });
});
