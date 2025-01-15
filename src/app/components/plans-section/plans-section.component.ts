import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-plans-section',
    standalone: true,
    imports: [],
    templateUrl: './plans-section.component.html',
    styleUrl: './plans-section.component.scss'
})
export class PlansSectionComponent {
    contactService = inject(ContactService)

    openContact(event: Event){
        event.preventDefault()
        this.contactService.stateConctactForm.set(true)
    }
}

