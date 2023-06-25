import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [null],
      password: [null],
      confirmPassword: [null],
      returnUrl: [null],
    })
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.loginService.register(this.registerForm.value).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
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
