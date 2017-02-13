"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Lancer on 013 13.02.17.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); // Модуля пишем для браузера
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // Отображаем наш модуль в браузере
var HelloAngular = (function () {
    function HelloAngular() {
    }
    return HelloAngular;
}());
HelloAngular = __decorate([
    core_1.Component({
        selector: 'hello-angular',
        template: "<h2>Hello Angular 2!</h2>"
    })
], HelloAngular);
var HelloAngularAppModule = (function () {
    function HelloAngularAppModule() {
    }
    return HelloAngularAppModule;
}()); // Имя нашего модуля
HelloAngularAppModule = __decorate([
    core_1.NgModule({
        // Импортируем модуль
        imports: [platform_browser_1.BrowserModule],
        // Объявляем наш компонент
        declarations: [HelloAngular],
        // Загружаем наш компонент
        bootstrap: [HelloAngular]
    })
], HelloAngularAppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);
//# sourceMappingURL=main.js.map