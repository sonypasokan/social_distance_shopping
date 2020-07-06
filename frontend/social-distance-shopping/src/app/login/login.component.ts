import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm : FormGroup;
  private authenticationService : AuthenticationService;
  private authenticationSubscription: Subscription;
  loginMessage: String;

  constructor(authenticationService : AuthenticationService) {
    this.authenticationService = authenticationService;
   }

  ngOnInit(): void {
    this.initForm();

    this.authenticationSubscription = this.authenticationService.authenticationSubject.subscribe(
      (message: String) => this.loginMessage = message
    );
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onLogin() {
    this.authenticationService.login(this.loginForm.value);
  }


  ngOnDestroy(): void {
    this.authenticationSubscription.unsubscribe();
  }

}
