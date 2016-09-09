"use strict";
var test_component_1 = require('./test.component');
var persona_component_1 = require('./persona.component');
var router_1 = require('@angular/router');
var APP_ROUTES = [
    { path: 'view-persona', name: 'Test Component', component: test_component_1.TestComponent },
    { path: '', name: 'Persona Component', component: persona_component_1.PersonaComponent }
];
exports.APP_ROUTES_PROVIDER = [
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.routes.js.map