import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'e-commerce-client';
  constructor(private _auth: AuthService) { 
  }

  ngOnInit() {
   const user =  this._auth.login('support@gmail.com', '12345678');  
  }
}
