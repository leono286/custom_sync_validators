import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MatchingEmails } from "../../../validators/matching-emails-sync-validator";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: "app-cross-field-reactive",
  templateUrl: "./cross-field-reactive.component.html",
  styleUrls: ["./cross-field-reactive.component.scss"]
})
export class CrossFieldFormReactiveComponent {

  emailsMatchForm: FormGroup;
  formFields: string[];


  constructor(fb: FormBuilder) {

    let commonValidators = [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
    ];

    let controlsConfig = {
      email: ['', commonValidators],
      emailConfirmation: ['', commonValidators]
    }

    let optionsConfig = {
      validator: MatchingEmails,
    };

    this.emailsMatchForm =
      fb.group(
        controlsConfig,
        optionsConfig
      );

  }


  get email() {
    return this.emailsMatchForm.get('email');
  }
  get emailConfirmation() {
    return this.emailsMatchForm.get('emailConfirmation');
  }

  get nice(): boolean {
    return (this.email.pristine || this.emailConfirmation.pristine) && this.email.invalid && this.emailConfirmation.invalid;
  }
  get amazed(): boolean {
    return (this.email.valid || this.emailConfirmation.valid) && (this.email.invalid || this.emailConfirmation.invalid)
  }

  get sarcastic(): boolean {
    return this.email.dirty && this.emailConfirmation.dirty && this.email.invalid && this.emailConfirmation.invalid && (this.email.value || this.emailConfirmation.value);
  }

  get angry(): boolean {
    return this.email.valid && this.emailConfirmation.valid && this.emailsMatchForm.invalid;
  }

  get frowning(): boolean {
    return this.email.dirty && this.emailConfirmation.dirty && this.email.invalid && this.emailConfirmation.invalid && !this.email.value && !this.emailConfirmation.value;
  }

  get happy(): boolean {
    return this.emailsMatchForm.valid;
  }

}
