import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  
  ngOnInit(): void {
    localStorage.removeItem('token');
  }

}
