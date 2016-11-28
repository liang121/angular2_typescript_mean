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
var MessageFilterPipe = (function () {
    function MessageFilterPipe() {
    }
    MessageFilterPipe.prototype.transform = function (messages, condition, isEnable) {
        var result = [];
        var currentDate = new Date();
        if (this.isEmpty(condition) || this.isEmpty(messages)) {
            return messages;
        }
        if (isEnable) {
            var i;
            for (i = 0; i < messages.length; i++) {
                if (this.isNum(condition)) {
                    if (this.daysDiff(messages[i].messageHeader.date, currentDate) <= condition) {
                        result.push(messages[i]);
                    }
                }
                else {
                    if (messages[i].isReaded === false) {
                        result.push(messages[i]);
                    }
                }
            }
            return result;
        }
        else {
            return messages;
        }
    };
    ;
    MessageFilterPipe.prototype.daysDiff = function (sDate, eDate) {
        var startDate = new Date(sDate);
        var endDate = new Date(eDate);
        return Math.ceil((endDate.getTime() - startDate.getTime()) / 1000 / 3600 / 24);
    };
    MessageFilterPipe.prototype.isEmpty = function (val) {
        if (val === '' || val === undefined || val === null) {
            return true;
        }
        else {
            return false;
        }
    };
    MessageFilterPipe.prototype.isNum = function (val) {
        if (typeof (val) === 'number')
            return true;
        else
            return false;
    };
    MessageFilterPipe = __decorate([
        core_1.Pipe({ name: 'messageFilter' }), 
        __metadata('design:paramtypes', [])
    ], MessageFilterPipe);
    return MessageFilterPipe;
}());
exports.MessageFilterPipe = MessageFilterPipe;
//# sourceMappingURL=messageFilter.pipe.js.map