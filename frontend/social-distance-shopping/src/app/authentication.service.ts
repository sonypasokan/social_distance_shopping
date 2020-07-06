import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { LoginUserModel } from './login/login-user.model';
import { environment } from './environments/environments'
import { Subject } from 'rxjs';



@Injectable()
export class AuthenticationService {

    private httpClient : HttpClient;
    authenticationSubject: Subject<String> = new Subject<String>();

    constructor (httpClient : HttpClient) {
        this.httpClient = httpClient;
    }

    login(user : LoginUserModel) {
        this.httpClient
            .post(environment.apiUrl + "/api-token/", user)
            .subscribe( (responseData: any) => {
                console.log(responseData);
                localStorage.setItem("token", responseData.token);
                this.authenticationSubject.next("Logged in successfully");
            },
            error => {
                console.log(error.error["non_field_errors"][0]);
                this.authenticationSubject.next(error.error["non_field_errors"][0]);
            }
            );
    }
}