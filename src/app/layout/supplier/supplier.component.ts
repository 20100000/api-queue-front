import { Component, OnInit } from '@angular/core';
import {SupplierService} from './supplier.service';
import {NgForm} from '@angular/forms';
import {WsMsg} from './wsMsg.service';
@Component({
    selector: 'app-blank-page',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
    public data: any;
    public form: any;
    constructor(public suServer: SupplierService, public wss: WsMsg) {
        this.wss.messages.subscribe(msg => {
            this.data = msg.data;
        });
    }
    addSupplier() {
        this.suServer.createSupplier(this.form).subscribe( res => {
            if ( res.success ) {
                alert( ' OK ' + res.data);
            }
        });
    }

    onSubmit(form: NgForm) {
        console.log('form data : ', form.value);

        this.form = form.value;
        if (this.form.name && this.form.doc) {
            this.addSupplier();
            form.value.name = '';
            form.value.doc = '';
        } else {
            alert('Preencha todos os campos.');
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
    }
}
