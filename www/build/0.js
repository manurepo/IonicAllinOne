webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatemePageModule", function() { return LocatemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locateme__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocatemePageModule = /** @class */ (function () {
    function LocatemePageModule() {
    }
    LocatemePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__locateme__["a" /* LocatemePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__locateme__["a" /* LocatemePage */]),
            ],
        })
    ], LocatemePageModule);
    return LocatemePageModule;
}());

//# sourceMappingURL=locateme.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocatemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LocatemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocatemePage = /** @class */ (function () {
    function LocatemePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocatemePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocatemePage');
    };
    LocatemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locateme',template:/*ion-inline-start:"/Users/admin/Desktop/Manu/Workouts/IonicAllinOne/src/pages/locateme/locateme.html"*/'<!-- \n  Generated template for the LocatemePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>locateme</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content> -->\n\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n                     (ionCancel)="onCancel($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="property-list">\n\n  <ion-list *ngIf="viewMode===\'list\'">\n\n      <ion-item-sliding *ngFor="let property of properties">\n          <button ion-item (click)="openPropertyDetail(property)">\n              <ion-thumbnail item-left>\n                  <img src="{{property.thumbnail}}"/>\n              </ion-thumbnail>\n              <h2>{{property.title}}</h2>\n              <p>{{property.city}}, {{property.state}} ∙ {{ property.price }}</p>\n          </button>\n          <ion-item-options>\n              <button danger (click)="deleteItem(property)">Delete</button>\n          </ion-item-options>\n      </ion-item-sliding>\n\n  </ion-list>\n\n  <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n</ion-content>\n\n<ion-footer padding>\n  <ion-segment [(ngModel)]="viewMode">\n      <ion-segment-button value="list">\n          <ion-icon name="list"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="map" (ionSelect)="showMap()">\n          <ion-icon name="map"></ion-icon>\n      </ion-segment-button>\n  </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"/Users/admin/Desktop/Manu/Workouts/IonicAllinOne/src/pages/locateme/locateme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LocatemePage);
    return LocatemePage;
}());

//# sourceMappingURL=locateme.js.map

/***/ })

});
//# sourceMappingURL=0.js.map