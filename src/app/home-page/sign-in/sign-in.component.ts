import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Import FormBuilder, FormGroup, Validators

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  signInForm: FormGroup;  // Define the FormGroup

  constructor(private fb: FormBuilder) {  // Inject FormBuilder into the component

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  
      password: ['', [Validators.required, Validators.minLength(6)]]  // Password with a minimum length of 6 characters
    });
  }

  // Define the onSubmit method to handle form submission
  onSubmit() {
    if (this.signInForm.valid) {
      // Logic for form submission, such as making an API call for authentication
      console.log('Form Submitted', this.signInForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
