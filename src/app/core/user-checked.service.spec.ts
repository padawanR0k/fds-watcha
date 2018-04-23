import { TestBed, inject } from '@angular/core/testing';

import { UserCheckedService } from './user-checked.service';

describe('UserCheckedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCheckedService]
    });
  });

  it('should be created', inject([UserCheckedService], (service: UserCheckedService) => {
    expect(service).toBeTruthy();
  }));
});
