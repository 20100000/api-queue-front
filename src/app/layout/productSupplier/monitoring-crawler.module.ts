import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { MonitoringCrawler } from './monitoring-crawler';
import { MonitoringCrawlerComponent } from './monitoring-crawler.component';
import {MonitoringCrawlerService} from './monitoring-crawler.service';

@NgModule({
    imports: [CommonModule, MonitoringCrawler, PageHeaderModule],
    providers: [MonitoringCrawlerService],
    declarations: [MonitoringCrawlerComponent]
})
export class MonitoringCrawlerModule {}
