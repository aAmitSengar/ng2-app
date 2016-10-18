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
// Keep the Input import for now, we'll remove it later:
var core_1 = require('@angular/core');
//import { ActivatedRoute, Params }   from '@angular/router';
//import { Location }                 from '@angular/common';
//import { Hero }                 from './hero';
//import { HeroService } from './hero.service';
var HomeComponent = (function () {
    function HomeComponent() {
        this.mydate = new Date();
        this.today = Date.now();
        this.date2 = new Date(2016, 5, 10);
        this.datepickerOpts = {
            startDate: new Date(2016, 5, 10),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'D, d MM yyyy'
        };
        this.date5 = new Date();
        this.datepickerToOpts = {};
    }
    HomeComponent.prototype.handleDateFromChange = function (dateFrom) {
        // update the model
        this.dateFrom = dateFrom;
        // do not mutate the object or angular won't detect the changes
        this.datepickerToOpts = {
            startDate: dateFrom
        };
    };
    HomeComponent.prototype.getDate = function (dt) {
        return dt && dt.getTime();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], HomeComponent.prototype, "mydate", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-home',
            templateUrl: 'home.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map