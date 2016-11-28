"use strict";
var router_1 = require('@angular/router');
//import { MessageCenter } from './features/messageCenter/messageCenter.module'
exports.routes = [
    { path: '', redirectTo: 'messageCenter', pathMatch: 'full' },
    //{ path: '', redirectTo: '/messageCenter', pathMatch: 'full'},
    { path: 'messageCenter', loadChildren: './client/app/features/messageCenter/messageCenter.module.js' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map