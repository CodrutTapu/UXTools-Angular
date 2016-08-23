import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent, [
    DND_PROVIDERS, HTTP_PROVIDERS
]);
