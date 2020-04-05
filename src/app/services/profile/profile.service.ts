import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UserProfile } from '../../models/user-profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private ref = 'account';

  constructor(
    private afs: AngularFirestore
  ) { }

  get(userId: string): Observable<UserProfile> {
    let accountDoc: AngularFirestoreDocument<any>;
    accountDoc = this.afs.doc<Account>(`${this.ref}/${userId}`);
    return accountDoc.valueChanges()
    .pipe(map(data => {
      return (data) ? this.deserializeUserProfile(data) : null;
    }));
  }

  create(userId: string, profile: UserProfile): Observable<UserProfile> {
    return new Observable((subscriber) => {
      const accounts = this.afs.collection(this.ref);
      accounts.doc(userId).set(profile.toJson())
      .then(res => {
        subscriber.next(profile);
        subscriber.complete();
      })
      .catch(error => {
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }

  update(userId: string, profile: UserProfile): Observable<UserProfile> {
    return this.create(userId, profile);
  }

  private deserializeUserProfile(json) {
    return new UserProfile(
      json.birthday,
      json.covid_19_testing,
      json.location,
      json.feedback,
      json.supplies,
      json.symptoms,
      json.updated_date,
      json.gender,
      json.zipcode
    );
  }
}
