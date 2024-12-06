import { Component } from '@angular/core';

@Component({
selector: 'app-inter',
templateUrl: './inter.component.html',
styleUrls: ['./inter.component.css']
})
export class InterComponent {
mensaje: string = '¡Esto es un ejemplo de interpolación en Angular!';
}