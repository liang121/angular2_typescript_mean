"use strict";
var router_1 = require('@angular/router');
var messageCenter_component_js_1 = require('./messageCenter.component.js');
var messageInbox_component_js_1 = require('./messageInbox.component.js');
var messageSentbox_component_js_1 = require('./messageSentbox.component.js');
exports.routes = [
    {
        path: '',
        component: messageCenter_component_js_1.MessageCenter,
        children: [
            {
                path: 'inbox', component: messageInbox_component_js_1.MessageInbox,
            },
            {
                path: 'sentbox', component: messageSentbox_component_js_1.MessageSentbox,
            },
            {
                path: '', redirectTo: 'inbox', pathMatch: 'full'
            }
        ],
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=messageCenter.routing.js.map