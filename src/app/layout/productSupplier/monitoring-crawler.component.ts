import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ActivatedRoute} from '@angular/router';
import {MonitoringCrawlerService} from './monitoring-crawler.service';

@Component({
    selector: 'app-tables',
    templateUrl: './monitoring-crawler.component.html',
    styleUrls: ['./monitoring-crawler.component.scss'],
    animations: [routerTransition()]
})
export class MonitoringCrawlerComponent implements OnInit {
    id: any;
    data: any;
    constructor(public mcs: MonitoringCrawlerService, public route: ActivatedRoute) {}
    getItem(id) {
        this.mcs.getMCrawler(id).subscribe(res => {
            if (res.success) {
                this.data = res.data;
            }
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            if (this.id) {
                this.getItem(this.id);
            }
        });
    }
}
