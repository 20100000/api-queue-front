import { TestBed } from '@angular/core/testing';

import { MonitoringCrawlerService } from './monitoring-crawler.service';

describe('MonitoringCrawlerService', () => {
  let service: MonitoringCrawlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringCrawlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
