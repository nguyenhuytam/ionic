import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth:AngularFireAuth) { }

  login(data:any ) {
    return new Promise<any>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(data.email, data.password).then(
        res => resolve(res),
        error => reject(error),

        )
  });
}
}
