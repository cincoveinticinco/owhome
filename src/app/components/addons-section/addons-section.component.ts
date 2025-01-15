import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-addons-section',
    standalone: true,
    imports: [],
    templateUrl: './addons-section.component.html',
    styleUrl: './addons-section.component.scss'
})
export class AddonsSectionComponent {
    contactService = inject(ContactService)

    openContact(event: Event){
        event.preventDefault()
        this.contactService.stateConctactForm.set(true)
    }
}
