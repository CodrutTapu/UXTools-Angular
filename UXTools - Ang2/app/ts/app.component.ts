import {Component} from 'angular2/core';
import {TopNavComponent} from './topNav.component';

@Component({
    selector: 'ux-app',
    templateUrl: 'app/html/app.component.html',
    directives: [TopNavComponent]
})

export class AppComponent {

}
