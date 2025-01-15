import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  stateConctactForm = signal(false)
  contactServiceUrl = 'https://6b39m8lm79.execute-api.us-west-2.amazonaws.com/default/sendEmailSAveDataBases'

  constructor(private http: HttpClient) { }

  sendContact(formData: any){
    return this.http.post(this.contactServiceUrl, formData)
      .pipe(
        map( response => response)
      )
  }
}
