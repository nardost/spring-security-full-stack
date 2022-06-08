import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-registration-form',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userRegistrationForm = this.formBuilder.group({
      email: ['', [
        Validators.required, 
        Validators.email, 
        Validators.maxLength(320)]
      ],
      fullName: ['', [
        Validators.required, 
        Validators.maxLength(255), 
        Validators.pattern(/([A-Z][a-z]+)( [A-Z][a-z]+)*/)]
      ],
      phone: this.formBuilder.group({
        countryCode: ['', [
          Validators.required, 
          Validators.pattern(/[+][1-9]\d{,5}/)]
        ],
        phoneNumber: ['', [
          Validators.required, 
          Validators.pattern(/\d+/)]
        ]
      }),
      password: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(255)]
      ]
    });
  }

}
