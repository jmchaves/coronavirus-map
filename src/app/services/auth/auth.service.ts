import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserProfile } from '../../models/user-profile';
import { User } from '../../models/user';


import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // userData: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private profileService: ProfileService) {
    // this.userData = angularFireAuth.authState;
  }

  signUp(newUser: UserProfile, password: string): Observable<UserProfile> {
    return new Observable((subscriber) => {
      this.angularFireAuth.createUserWithEmailAndPassword(newUser.email, password)
      .then(res => {
        res.user.sendEmailVerification().then(() => {
          const id = res.user.uid;
          this.profileService.create(id, newUser).pipe(take(1)).
          subscribe({
            next: (profile) => {
              subscriber.next(profile);
              subscriber.complete();
            },
            error: (errors) => {
              subscriber.error(errors);
              subscriber.complete();
            },
          });
        }, (error) => {
          subscriber.error(error);
          subscriber.complete();
        });
      })
      .catch(error => {
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }

  login(email: string, password: string): Observable<UserProfile> {
    return new Observable((subscriber) => {
      this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res && res.user && !res.user.emailVerified) {
          this.logout();
          subscriber.error({ emailVerified:  res.user.emailVerified });
        } else {
          const id = res.user.uid;
          this.profileService.get(id).pipe(take(1)).
          subscribe({
            next: (profile) => {
              if (profile) {
                profile.id = id;
                profile.email =  res.user.email;
                subscriber.next(profile);
                subscriber.complete();
              } else {
                subscriber.next(null);
                subscriber.complete();
              }
            },
            error: (errors) => {
              subscriber.next(null);
              subscriber.complete();
            },
          });
        }
      })
      .catch(err => {
        subscriber.error(err);
        subscriber.complete();
      });
    });
  }

  logout() {
    this.angularFireAuth.signOut();
  }

  currentUser(): Observable<User> {
    return new Observable((subscriber) => {
      this.angularFireAuth.onAuthStateChanged((user) => {
        if (user) {
          subscriber.next(new User(user.uid, user.email, '', ''));
          subscriber.complete();
        } else {
          subscriber.error('No user is signed in.');
          subscriber.complete();
        }
      });
    });
  }
}
