import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'solicitation', pathMatch: 'prefix' },
            {
                path: 'product',
                loadChildren: () => import('./pruduct/product.module').then((m) => m.ProductModule)
            },
            {
                path: 'supplier',
                loadChildren: () => import('./supplier/supplier.module').then((m) => m.SupplierModule)
            },
            { path: 'supplierr/:id', loadChildren: () => import('./productSupplier/monitoring-crawler.module').then((m) => m.MonitoringCrawlerModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
