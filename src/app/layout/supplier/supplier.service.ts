import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const BASE = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
    constructor(private http: HttpClient) { }
    getAllDocs () {
        return this.http.get<any>(BASE + 'supplier/');
    }
    createSupplier (form: any) {
        console.log('aquiiiiiiiiiiiiiiii', form);

        return this.http.post<any>(BASE + 'supplier/', form);
    }
}
