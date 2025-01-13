import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

export type CarouselImagesItem = {
  src: string,
  alt: string
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() images: CarouselImagesItem[] = []

  configuration = {
    arrows: false,
    autoplay: true
  }
}
