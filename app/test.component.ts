import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'test-component',
    template: '<h1>Test</h1>',
    directives: [DND_DIRECTIVES],
})

export class TestComponent {}
