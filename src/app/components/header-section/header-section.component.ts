import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';
import { CarouselImagesItem, HeaderCarouselComponent } from '../carousel/carousel.component';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-header-section',
    standalone: true,
    imports: [HeaderCarouselComponent],
    templateUrl: './header-section.component.html',
    styleUrl: './header-section.component.scss',
    animations: [
        trigger('fade', [
            transition(':enter', [useAnimation(fadeAnimation)])
        ])
    ]
})
export class HeaderSectionComponent {
  contactService = inject(ContactService)
  images:CarouselImagesItem[] = [
    {src: './assets/breakdonw-sumary.png', alt: 'breakdown sumary'},
    {src: './assets/breakdonw-sumary.png', alt: 'breakdown sumary'},
    {src: './assets/breakdonw-sumary.png', alt: 'breakdown sumary'},
  ]
}
