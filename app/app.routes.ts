import { TestComponent } from './test.component';
import { PersonaComponent } from './persona.component';
import { provideRouter } from '@angular/router';

const APP_ROUTES = [
    { path: 'view-persona', name: 'Test Component', component: TestComponent },
    { path: '', name: 'Persona Component', component: PersonaComponent }
];

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
];
