import { afterNextRender, Component, inject, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import { HeaderComponent } from './components/header/header.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ModulesSectionComponent } from './components/modules-section/modules-section.component';
import { PlansSectionComponent } from './components/plans-section/plans-section.component';
import { AddonsSectionComponent } from './components/addons-section/addons-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactService } from './services/contact.service';

@Component({
    selector: 'app-root',
    imports: [
        MatSidenavModule,
        CommonModule,
        HeaderComponent,
        HeaderSectionComponent,
        ModulesSectionComponent,
        PlansSectionComponent,
        AddonsSectionComponent,
        FooterComponent,
        NavigationComponent,
        ContactComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onewrapp-home';
  viewportScroller = inject(ViewportScroller)
  contactService = inject(ContactService)
  openContact = signal(false)

  constructor(){
   
  }
}
