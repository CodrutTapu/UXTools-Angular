import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class HTTTPService {
    constructor (private _http: Http) {}

    getJSON() {
        return this._http.get('http://localhost:3000/users')
            .map(res => res.json());
    }

    postJSON(json) {
        var param = JSON.stringify(json);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/users', param, {
            headers: headers
        })
        .map( res => res.json());
    }
}
