import { User } from './user';

export class UserProfile extends User {
  constructor(
    public birthday: firebase.firestore.Timestamp,
    public covid19Testing: string[],
    public location: firebase.firestore.GeoPoint,
    public feedback: string[],
    public supplies: string[],
    public symptoms: string[],
    public updatedDate: firebase.firestore.Timestamp,
    public gender: string,
    public zipcode: string,
  ) {
    super(null, null, null, null);
  }

  toJson() {
    return {
      'firstName': this.capitalizeFirstLetter(this.firstName),
      'lastName': this.capitalizeFirstLetter(this.lastName),
      'birthday': this.birthday,
      'covid_19_testing': this.covid19Testing,
      'location': this.location,
      'feedback': this.feedback,
      'supplies': this.supplies,
      'symptoms': this.symptoms,
      'updated_date': this.updatedDate,
      'gender': this.gender,
      'zipcode': this.zipcode
    };
  }

  private capitalizeFirstLetter(word: string) {
    if (!word) { return null; }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
