import { stagger, transition, trigger, useAnimation, query, animate, style } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';
import {  } from 'express';
import { fadeGroupAnimation } from '../../animations/fade-group.animation';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
       useAnimation(fadeGroupAnimation, {
        params: {delay: 30}
       })
      ])
    ])
  ]
})
export class HeaderComponent {

}
