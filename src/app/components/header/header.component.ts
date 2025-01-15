import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { fadeGroupAnimation } from '../../animations/fade-group.animation';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        NavigationComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    animations: [
        trigger('fade', [
            transition(':enter', [
                useAnimation(fadeGroupAnimation, {
                    params: { delay: 30 }
                })
            ])
        ])
    ]
})
export class HeaderComponent {

    @Output() toggleMenu = new EventEmitter()

    drawerToggle(){
        this.toggleMenu.emit()
    }
}
