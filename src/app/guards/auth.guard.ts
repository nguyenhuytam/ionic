import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'; // Import the core Firebase App module
import 'firebase/compat/auth'; // Import the Auth module
import { firebaseConfig } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise<boolean>((resolve, reject) => {
      // Ensure Firebase app is initialized before using any Firebase service
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig); // Replace yourFirebaseConfig with your Firebase config
      }

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
