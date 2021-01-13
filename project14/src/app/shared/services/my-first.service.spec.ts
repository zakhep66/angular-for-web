import { TestBed } from '@angular/core/testing';

import { MyFirstServise } from './my-first.service';

describe('MyFirstServise', () => {
  let service: MyFirstServise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstServise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
