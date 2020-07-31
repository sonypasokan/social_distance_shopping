import { TestBed } from '@angular/core/testing';

import { Request.Interceptor.Service.TsService } from './request.interceptor.service.ts.service';

describe('Request.Interceptor.Service.TsService', () => {
  let service: Request.Interceptor.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Request.Interceptor.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
