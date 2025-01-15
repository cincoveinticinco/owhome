import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Output() endNavigation = new EventEmitter()
  viewportScroller = inject(ViewportScroller)
  contactService = inject(ContactService)

  goTo(anchor: string){
    if(anchor == 'add-ons'){
      this.viewportScroller.setOffset([0, 100])
    }else{
      this.viewportScroller.setOffset([0, 70])
    }
    this.viewportScroller.scrollToAnchor(anchor);
    this.endNavigation.emit()
  }
}
