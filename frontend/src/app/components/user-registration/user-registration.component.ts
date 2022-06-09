import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'user-registration-form',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm!: FormGroup;
  faIcons: any = {
    newUserIcon: faUserPlus,
  };

  constructor(private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.userRegistrationForm = this.formBuilder.group({
      fullName: ['', [
        Validators.required, 
        Validators.maxLength(255), 
        Validators.pattern(/([A-Z][a-z]*)(\s[A-Z][a-z]*)*/)]
      ],
      email: ['', [
        Validators.required, 
        Validators.email, 
        Validators.maxLength(320)]
      ],
      phone: this.formBuilder.group({
        countryCode: ['', [
          Validators.required, 
          Validators.pattern(/\+[1-9]\d{0,5}/)]
        ],
        phoneNumber: ['', [
          Validators.required, 
          Validators.pattern(/\d+/)]
        ]
      }),
      password1: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(255)]
      ],
      password2: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(255)]
      ]
    });
  }

  handleSubmit(): void {
    console.log(this.userRegistrationForm);
  }

}
