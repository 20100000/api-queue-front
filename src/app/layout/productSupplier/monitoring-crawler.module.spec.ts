import { MonitoringCrawlerModule } from './monitoring-crawler.module';

describe('TablesModule', () => {
    let tablesModule: MonitoringCrawlerModule;

    beforeEach(() => {
        tablesModule = new MonitoringCrawlerModule();
    });

    it('should create an instance', () => {
        expect(tablesModule).toBeTruthy();
    });
});
