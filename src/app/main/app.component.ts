/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `
    <app-logo [routerLink]="['home']"></app-logo>

    <!-- event details -->
    <!--      or       -->
    <!-- contact form  -->

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
