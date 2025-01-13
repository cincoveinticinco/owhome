import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ModulesSectionComponent } from './components/modules-section/modules-section.component';
import { PlansSectionComponent } from './components/plans-section/plans-section.component';
import { AddonsSectionComponent } from './components/addons-section/addons-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    HeaderSectionComponent, 
    ModulesSectionComponent, 
    PlansSectionComponent, 
    AddonsSectionComponent,
    FooterComponent,
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onewrapp-home';
}
