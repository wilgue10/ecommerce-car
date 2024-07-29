import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from '@firebase/app-compat'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _auth: AngularFireAuth) { }

  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this._auth.signInWithPopup(provider);
  }

  async signOut() {
    await this._auth.signOut();
  }

  async login(email: string, password: string) {
    console.log("1111");
    try {
      return await this._auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert("No se ha podido hacer el log-in correctamente. Error: " + error)
      console.log("No se ha podido hacer el log-in correctamente. Error: " + error);
      return
    }
  }

}
