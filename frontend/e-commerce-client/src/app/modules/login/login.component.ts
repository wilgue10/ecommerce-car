import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private _auth: AuthService) { }
  onSubmit(): void {
    // Here you would handle form submission logic
 
    this._auth.login(this.email, this.password).then((resp) => {
      console.log('Logged', resp);
   
    });
  }
}
