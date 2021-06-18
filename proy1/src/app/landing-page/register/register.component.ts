import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from '../customValidator/custom-validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router:Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'),
        Validators.maxLength(15),
        Validators.minLength(8)
        ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/\d/),
        Validators.pattern(/[A-Z]/)
      ]],
      confirmPass: ['', [Validators.required]],
    },
    {
      validators: CustomValidator.passwordMatch
    });
  }

  ngOnInit(): void {

  }

  get f() {
    return this.registerForm.controls
  }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid) {
      return;
    }

    console.log( JSON.stringify(this.registerForm.value, null, 4));

  }

}
