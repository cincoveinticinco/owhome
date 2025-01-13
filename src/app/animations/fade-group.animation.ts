import { animate, animation, query, stagger, style } from "@angular/animations";

export const fadeGroupAnimation = animation([
    query('.fade-group-animation', [ 
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        stagger(200, animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'})),)
      ])
])

