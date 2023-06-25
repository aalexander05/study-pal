import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config-service.service';
import { LoginResponse } from '../Dtos/loginResponse';
import { LoginRequest } from '../Dtos/loginRequest';
import { RegisterRequest } from '../Dtos/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  controller: string = "Account"

  constructor(private httpClient: HttpClient,
    private appConfigService: AppConfigService) { }

  createToken(request: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.appConfigService.baseUrl}${this.controller}/CreateToken`, request);
  }

  register(request: RegisterRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.appConfigService.baseUrl}${this.controller}/Register`, request);
  }

}
