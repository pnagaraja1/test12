import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class AppsService {
    constructor(private http: Http) { }
    get() {
        console.log('inside chap list service');
        return this.http.get('http://localhost:3000/items')
         .map((res: Response) => {
         return res.json();
         }).share();
    }
}
