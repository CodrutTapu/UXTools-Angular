"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var ng2_dnd_1 = require('ng2-dnd/ng2-dnd');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [ng2_dnd_1.DND_PROVIDERS, http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTES_PROVIDER]);
//# sourceMappingURL=main.js.map