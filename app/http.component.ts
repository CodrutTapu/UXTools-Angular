import {Component} from '@angular/core';
import {HTTTPService} from './http.service';

@Component({
    selector: 'http',
    template: `<button (click)="onTestGet(gridElements)">Test Get Request</button><br>
    <p>Output: {{getData}}</p>
    <button (click)="onTestPost(gridElements)">Test Post Request</button><br>
    <p>Output: {{postData}}</p>`,
    providers: [HTTTPService],
    inputs: ['gridElements'],
})

export class HTTTPComponent {
    getData: string;
    postData: string;

    constructor (private _httpService: HTTTPService) {}

    onTestGet(gridElements) {
        this._httpService.getJSON()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(Error),
                    () => gridElements = this.getData
            );
    }
    onTestPost(gridElements) {
        this._httpService.postJSON(gridElements)
            .subscribe(
                data => this.postData = JSON.parse(data),
                error => alert(Error),
                    () => console.log('Finish!')
            );
    }
}
