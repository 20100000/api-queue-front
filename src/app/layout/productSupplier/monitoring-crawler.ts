import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringCrawlerComponent } from './monitoring-crawler.component';

const routes: Routes = [
    {
        path: '',
        component: MonitoringCrawlerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MonitoringCrawler {}
