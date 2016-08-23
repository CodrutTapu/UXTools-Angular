import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class HTTTPService {
    constructor (private _http: Http) {}

    getJSON() {
        return this._http.get('http://localhost:3000/persona')
            .map(res => res.json());
    }

    postJSON(json) {
        json = JSON.stringify(json);
        //var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:3000/persona', json, {
            headers: headers
        })
        .map( res => res.json());
    }
}
