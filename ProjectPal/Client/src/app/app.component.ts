import { Component, ViewChild, ElementRef } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('navBurger') navBurger: ElementRef | undefined;
  @ViewChild('navMenu') navMenu: ElementRef | undefined;

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get username(): string {
    var token = localStorage.getItem('token');
    try {
      var decodedToken: any = jwt_decode(token!);
      return decodedToken.username;
    } catch(Error) {
      return '';
    }

  }

  hamburgerMenuActive = false;

  toggleHamburgerMenu() : void {
    this.navBurger?.nativeElement.classList.toggle('is-active');
    this.navMenu?.nativeElement.classList.toggle('is-active');
  }
  
  onMenuItemSelected() : void {
    this.navBurger?.nativeElement.classList.remove('is-active');
    this.navMenu?.nativeElement.classList.remove('is-active');
  }
}
