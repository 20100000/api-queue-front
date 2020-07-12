import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NgForm} from '@angular/forms';
import {ProductService} from './product.service';
import { WsMsg } from './wsMsg.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    animations: [routerTransition()]
})
export class ProductComponent implements OnInit {
    form: any;
    public suppliers: any;
    public data: any;

    constructor(public pro: ProductService, public wss: WsMsg) {
        this.wss.messages.subscribe(msg => {
            this.data = msg.data;
        });
    }
    getAllSuppliers() {
        this.pro.suppliers().subscribe( res => {
            if ( res.success ) {
                this.suppliers =  res.data;
            }
        });
    }
    addProduct () {
        this.pro.createProduct(this.form).subscribe( res => {
            if ( res.success ) {
                alert( ' OK ' + res.data);
            }
            console.log('retorno', res);
        });
    }
    onSubmit(form: NgForm) {
        console.log('form data : ', form.value);

        this.form = form.value;
        if (this.form.name && this.form.description && this.form.supplier_id) {
            this.addProduct();
            form.value.name = '';
            form.value.description = '';
        } else {
            alert('Preencha todos os campos seu burro.');
        }
    }
    sendMsg() {
        let x = 1;
        setInterval(() => {
            this.wss.messages.next();
            console.log('conta send ', x++);
        },5000);
    }
    ngOnInit() {
        this.sendMsg();
        this.getAllSuppliers();
    }
}
