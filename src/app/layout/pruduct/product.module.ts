import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { FormsModule } from '@angular/forms';

import {ProductService} from './product.service';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import {WebsocketService} from '../common/websocket.service';
import {WsMsg} from './wsMsg.service';
@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, ProductRoutingModule, StatModule, FormsModule],
    providers: [ProductService, WebsocketService, WsMsg],
    declarations: [ProductComponent]
})
export class ProductModule {}
