import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
  userForm: FormGroup;

  // constructor(private fb : FormBuilder){
  //   this.form = this.fb.group({
  //     firstName : ['',Validators.minLength(4),],
  //     lastName : ['',Validators.minLength(3),],
  //     email :['',Validators.required,Validators.email,],
  //     password : ['',Validators.required,Validators.minLength(4),],
  //   });
  // }

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
    });
  }
  ngOnInit(): void {}

  get formControl() {
    return this.userForm.controls;
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      alert('User Registered Successfully');
      this.userForm.reset();
    } else {
      return alert('User Form is Invalid');
    }
  }
}
  // get isFirstNameInvalid(){
  //   return this.form.controls['firstName'].touched && !(this.form.controls['firstName'].errors === null);
  // }
  // get firstNameValidationMessage(){
  //   const errors = this.form.controls['firstName'].errors;
  //   if(errors['required']){
  //     return 'First Name Is Required';
  //   }
  //   if(errors['minlength']){
  //     const minError = errors['minlength'];
  //     return `First Name Should be ${minError}characters`;
  //   }
  // }
  // get isLastNameInvalid(){
  //   return this.form.controls['lastName'].touched && !(this.form.controls['lastName'].errors === null);
  // }

