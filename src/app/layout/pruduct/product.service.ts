import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const BASE = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    createProduct (form: any) {
      console.log('aquiiiiiiiiiiiiiiii', form);

         return this.http.post<any>(BASE + 'product/', form);
    }
    suppliers() {
      return this.http.get<any>(BASE + 'supplier');
    }
}
