import { animate, animation, style, transition } from "@angular/animations";

export const fadeAnimation = animation([
    style({ transform: 'translateY(-20px)', opacity: 0 }),
    animate( '500ms {{delay}}ms ease-out', style({transform: 'translateY(0)', opacity: 1}))
])