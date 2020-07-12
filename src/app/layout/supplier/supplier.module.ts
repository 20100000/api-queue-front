import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import {SupplierService} from './supplier.service';
import { FormsModule } from '@angular/forms';
import {WsMsg} from './wsMsg.service';
import {WebsocketService} from '../common/websocket.service';
import { StatModule } from '../../shared';

@NgModule({
    imports: [CommonModule, SupplierRoutingModule, StatModule, FormsModule, NgbCarouselModule, NgbAlertModule],
    providers: [SupplierService, WsMsg, WebsocketService],
    declarations: [SupplierComponent]
})
export class SupplierModule {}
