import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const BASE = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class MonitoringCrawlerService {

  constructor(private http: HttpClient) { }

    getMCrawler (id: any) {
        return this.http.get<any>(BASE + 'supplier/' + id);
    }
}
