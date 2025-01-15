import { NgFor } from '@angular/common';
import { Component,  Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export type CarouselImagesItem = {
  src: string,
  alt: string
}

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [NgbCarouselModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss'
})
export class HeaderCarouselComponent {
  @Input() images: CarouselImagesItem[] = []

  configuration = {
    arrows: false,
    autoplay: true
  }
}
