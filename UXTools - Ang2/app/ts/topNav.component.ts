import {Component} from 'angular2/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'top-navigation',
    templateUrl: 'app/html/topNav.component.html'
})

export class TopNavComponent {
    addGridElement(dim:number) {
        console.log(dim);
    }
}
