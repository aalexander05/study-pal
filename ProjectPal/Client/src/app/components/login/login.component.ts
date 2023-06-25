import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null],
      rememberMe: [false],
      returnUrl: [null],
    })
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.createToken(this.loginForm.value).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/summary']);
      },
      error: error => {
        console.error(error);
        if (error.status === HttpStatusCode.InternalServerError) {
          this.errorMessage = "There was an error. The system must be having a bad day. Try again later."
        } else if (error.status === HttpStatusCode.BadRequest) {
          this.errorMessage = error.error
        }
        else {
          this.errorMessage = "There was an error."
        }
      }
    })
  }


}
