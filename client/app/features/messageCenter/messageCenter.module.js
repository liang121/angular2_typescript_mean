"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var messageCenter_routing_js_1 = require('./messageCenter.routing.js');
var share_module_js_1 = require('../share/share.module.js');
var messageInbox_component_js_1 = require('./messageInbox.component.js');
var messageSentbox_component_js_1 = require('./messageSentbox.component.js');
var messageCenter_component_js_1 = require('./messageCenter.component.js');
var dateInfo_service_js_1 = require('../service/dateInfo.service.js');
var MessageCenterModule = (function () {
    function MessageCenterModule() {
    }
    MessageCenterModule = __decorate([
        core_1.NgModule({
            imports: [messageCenter_routing_js_1.routing, share_module_js_1.ShareModule],
            declarations: [messageInbox_component_js_1.MessageInbox, messageSentbox_component_js_1.MessageSentbox, messageCenter_component_js_1.MessageCenter],
            providers: [dateInfo_service_js_1.DateInfo]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageCenterModule);
    return MessageCenterModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageCenterModule;
//# sourceMappingURL=messageCenter.module.js.map