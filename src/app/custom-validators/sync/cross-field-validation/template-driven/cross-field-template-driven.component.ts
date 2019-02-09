import { Component, OnInit } from '@angular/core';
import { NgForm, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-cross-field-template-driven',
  templateUrl: './cross-field-template-driven.component.html',
  styleUrls: ['./cross-field-template-driven.component.css']
})
export class CrossFieldTemplateDrivenComponent {

  readonly EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  emailField: string;
  emailConfirmationField: string;




  getFormFields(form: NgForm):AbstractControl[]{
    return [form.control.get('email'), form.control.get('emailConfirmation')];
  }

  formIsReady(form: NgForm){
    return Object.keys(form.controls).length == 2;
  }

  nice(form: NgForm): boolean {
    if(this.formIsReady(form)) {
      let [email, emailConfirmation] = this.getFormFields(form);
      return (email.pristine || emailConfirmation.pristine) && email.invalid && emailConfirmation.invalid;
    }
  }
  amazed(form: NgForm): boolean {
    if(this.formIsReady(form)){
      let [email, emailConfirmation] = this.getFormFields(form);
      return (email.valid || emailConfirmation.valid) && (email.invalid || emailConfirmation.invalid)
    }
  }

  sarcastic(form: NgForm): boolean {
    if(this.formIsReady(form)){
      let [email, emailConfirmation] = this.getFormFields(form);
      return email.dirty && emailConfirmation.dirty && email.invalid && emailConfirmation.invalid && (email.value || emailConfirmation.value);
    }
  }

  angry(form: NgForm): boolean {
    if(this.formIsReady(form)){
      let [email, emailConfirmation] = this.getFormFields(form);
      return email.valid && emailConfirmation.valid && form.invalid;
    }
  }

  frowning(form: NgForm): boolean {
    if(this.formIsReady(form)){
      let [email, emailConfirmation] = this.getFormFields(form);
      return email.dirty && emailConfirmation.dirty && email.invalid && emailConfirmation.invalid && !email.value && !emailConfirmation.value;
    }
  }

  happy(form: NgForm): boolean {
    if(this.formIsReady(form)){
      return form.valid;
    }
  }

}
