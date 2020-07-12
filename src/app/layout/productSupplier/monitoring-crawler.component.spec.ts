import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MonitoringCrawlerComponent } from './monitoring-crawler.component';
import { MonitoringCrawlerModule } from './monitoring-crawler.module';

describe('TablesComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MonitoringCrawlerModule, RouterTestingModule]
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(MonitoringCrawlerComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
