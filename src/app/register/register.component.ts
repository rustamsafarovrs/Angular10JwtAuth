import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any;
  isSuccessful = false;
  isSignupFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = [];
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignupFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignupFailed = true;
      }
    );
  }

}
