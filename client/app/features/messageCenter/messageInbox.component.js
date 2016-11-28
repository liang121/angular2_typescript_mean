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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var dateInfo_service_js_1 = require('../service/dateInfo.service.js');
var MessageInbox = (function () {
    function MessageInbox(http, dateInfo) {
        this.http = http;
        this.dateInfo = dateInfo;
        this.messagesObject = [];
    }
    ;
    MessageInbox.prototype.ngOnInit = function () {
        this.templateId = 'INBOX';
        this.mark = 'Mark As Read';
        this.filterCondition = 'ALL';
        this.getMessage();
        console.log(this.dateInfo.getDate() + '   from messageInbox.component');
    };
    MessageInbox.prototype.getMessage = function () {
        var _this = this;
        this.http.post('http://localhost:9000/api/inbox/systemMessages/operate', { action: 'G' })
            .subscribe(function (data) { return _this.assignMessage(data); });
    };
    MessageInbox.prototype.assignMessage = function (data) {
        this.messagesObject = JSON.parse(data._body);
    };
    MessageInbox.prototype.operateMessage = function (action, actionName) {
        var _this = this;
        if (actionName) {
            this.mark = actionName;
        }
        this.http.post('http://localhost:9000/api/inbox/systemMessages/operate', { action: action, selectedItemsId: this.selectedItemsId })
            .subscribe(function (data) { return _this.getMessage(); });
    };
    MessageInbox.prototype.updateSelectedId = function (itemObject) {
        itemObject.selected = !itemObject.selected;
        this.selectedItemsId = [];
        for (var i = 0; i < this.messagesObject.length; i++) {
            if (this.messagesObject[i].selected === true) {
                this.selectedItemsId.push(this.messagesObject[i]._id);
            }
        }
    };
    MessageInbox.prototype.setFilterCondition = function (conditionVal, conditionName) {
        this.filterCondition = conditionName;
        this.conditionVal = conditionVal;
    };
    MessageInbox = __decorate([
        core_1.Component({
            templateUrl: './client/app/features/messageCenter/messageBox.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, dateInfo_service_js_1.DateInfo])
    ], MessageInbox);
    return MessageInbox;
}());
exports.MessageInbox = MessageInbox;
;
//# sourceMappingURL=messageInbox.component.js.map