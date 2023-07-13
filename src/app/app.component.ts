import { Component } from '@angular/core';

declare var $: any; // declaramos jquery
declare function initEcommerce([]): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor() { // Al cargar el contructor se inicia la funcion de jquery (todas las llamadas iniciales)
    setTimeout(() => {
      initEcommerce($);
    }, 50);
  }
}
