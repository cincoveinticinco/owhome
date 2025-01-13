import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';
import { CarouselComponent, CarouselImagesItem } from '../carousel/carousel.component';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [useAnimation(fadeAnimation)])
    ])
  ]
})
export class HeaderSectionComponent {
  images:CarouselImagesItem[] = [
    {src: './assets/breakdonw-sumary.png', alt: 'breakdown sumary'},
    {src: './assets/breakdonw-sumary.png', alt: 'breakdown sumary'},
    {src: './assets/breakdonw-sumary.png', alt: 'breakdown sumary'},
  ]
}
