/**
 * Created by Lancer on 013 13.02.17.
 */
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Модуля пишем для браузера
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Отображаем наш модуль в браузере

@Component({
    selector: 'hello-angular',
    template: `<h2>Hello Angular 2!</h2>`
})
class HelloAngular {}

@NgModule({
    // Импортируем модуль
    imports: [ BrowserModule ],
    // Объявляем наш компонент
    declarations: [ HelloAngular ],
    // Загружаем наш компонент
    bootstrap: [ HelloAngular ]
})
class HelloAngularAppModule {} // Имя нашего модуля

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);