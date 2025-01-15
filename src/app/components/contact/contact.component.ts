import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ContactService } from '../../services/contact.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeGroupAnimation } from '../../animations/fade-group.animation';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-contact',
  imports: [
    MatButtonModule, 
    MatIconModule, 
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
   animations: [
           trigger('fade', [
            transition(':enter', [useAnimation(fadeAnimation)])
        ])
      ]
})
export class ContactComponent {
  @Output() close = new EventEmitter()

  fb = inject(FormBuilder)
  contactService = inject(ContactService)

  contactForm = this.fb.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, Validators.required),
    captcha: new FormControl(null, Validators.required),
  })

  closeModal(){
    this.close.emit()
  }

  submit(){
    const {captcha, ...form} = this.contactForm.value
    this.contactService.sendContact(form)
    .subscribe( (data:any) => {
        console.log(data)
        this.close.emit()
      })
  }
}
