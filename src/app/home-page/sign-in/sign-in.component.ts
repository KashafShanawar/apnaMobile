import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


username: string = '';
password: string = '';

onSubmit() {
  if (this.username && this.password) {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
  } else {
    alert('Please fill out both fields.');
  }
}
}