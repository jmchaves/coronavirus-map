import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController, } from '@ionic/angular';

import { LoginSignupModalComponent } from '../../components/login-signup-modal/login-signup-modal.component';

import { AuthService } from '../../services/auth/auth.service';
import { ProfileService } from '../../services/profile/profile.service';

import { take } from 'rxjs/operators';
import { UserProfile } from 'src/app/models/user-profile';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.page.html',
  styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {

  profileForm: FormGroup;
  userId: string;
  supplies: any;
  coronavirusTesting: any;
  symptoms: any;
  loading: boolean;
  successMessages: any;

  constructor(
    public alertController: AlertController,
    private router: Router,
    public modalController: ModalController,
    public authService: AuthService,
    public profileService: ProfileService
    ) { }

  ngOnInit() {
    this.loading = false;
  }

  ionViewWillEnter() {
    this.authService.currentUser().pipe(take(1)).
    subscribe({
      next: (user) => {
        if (!this.profileForm) {
          this.setProfileForm(user);
        }
      },
      error: (errors) => {
        this.presentModal();
      },
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginSignupModalComponent
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.profile) {
      this.createProfileForm(data.profile);
    } else {
      this.router.navigate(['/tabs/map']);
    }
  }

  async logoutConfirm() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancelled');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.logout();
            this.router.navigate(['/tabs/map']);
          }
        }
      ]
    });

    await alert.present();
  }

  createProfileForm(data: UserProfile): void {
    this.profileForm = new FormGroup({
      emailAddress: new FormControl({value: data.email, disabled: true}, [
        Validators.required,
        Validators.email,
        Validators.maxLength(150),
        // reg ex for emal: https://www.regular-expressions.info/email.html
        // Check: https://firebase.google.com/docs/reference/security/database/regex
        Validators.pattern(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)
      ]),
      birthday: new FormControl(data.birthday.toDate().toISOString(), Validators.required),
      gender: new FormControl(data.gender),
      zipcode: new FormControl(data.zipcode, [Validators.required, Validators.maxLength(10)]),
      firstName: new FormControl(data.firstName, [Validators.maxLength(150)]),
      lastName: new FormControl(data.lastName, [Validators.maxLength(150)]),
      updatedDate: new FormControl(new Date()),
    });

    this.setCheckboxOptions(data);
  }

  getProfileData(): UserProfile {
    const data = new UserProfile(
      firebase.firestore.Timestamp.fromDate(new Date(this.profileForm.get('birthday').value)),
      this.getCheckboxOptions('coronavirusTesting'),
      null,
      [],
      this.getCheckboxOptions('supplies'),
      this.getCheckboxOptions('symptoms'),
      firebase.firestore.Timestamp.fromDate(new Date()),
      this.profileForm.get('gender').value,
      this.profileForm.get('zipcode').value
    );

    data.email = this.profileForm.get('emailAddress').value;
    data.firstName = this.profileForm.get('firstName').value;
    data.lastName = this.profileForm.get('lastName').value;
    return data;
  }

  setProfileForm(user: User) {
    this.userId = user.id;
    this.profileService.get(user.id).pipe(take(1)).
    subscribe({
      next: (profile) => {
        profile.email = user.email;
        this.createProfileForm(profile);
      },
      error: (errors) => {
        this.authService.logout();
        this.presentModal();
      },
    });
  }

  saveChanges() {
    if (this.profileForm.valid) {
      this.loading = true;
      this.authService.currentUser().pipe(take(1)).
      subscribe({
        next: (user) => {
          this.profileService.update(user.id, this.getProfileData()).pipe(take(1)).
          subscribe({
            next: (profile) => {
              this.loading = false;
              this.successMessages = ['All changes saved!'];
              setTimeout(() => {
                this.successMessages = [];
              }, 3000);
            },
            error: (errors) => {
              this.loading = false;
              this.authService.logout();
              this.presentModal();
              this.somethingWentWrongMessage();
            },
          });
        },
        error: (errors) => {
          this.loading = false;
          this.authService.logout();
          this.presentModal();
          this.somethingWentWrongMessage();
        },
      });
    }
  }

  logout() {
    this.authService.logout();
  }

  setCheckboxOptions(profile: UserProfile): void {
    this.supplies = [
      { val: 'Toilet Paper', isChecked: profile.supplies.includes('Toilet Paper') },
      { val: 'Soap or Hand Sanitizer', isChecked: profile.supplies.includes('Soap or Hand Sanitizer') },
      { val: 'Food', isChecked: profile.supplies.includes('Food') },
      { val: 'Water', isChecked: profile.supplies.includes('Water') },
      { val: 'First Aid Kit', isChecked: profile.supplies.includes('First Aid Kit') },
      { val: 'Baby Supplies', isChecked: profile.supplies.includes('Baby Supplies') },
    ];

    this.coronavirusTesting = [
      { val: 'You tested positive for the coronavirus',
        isChecked: profile.covid19Testing.includes('You tested positive for the coronavirus') },
      { val: 'You are recovered', isChecked: profile.covid19Testing.includes('You are recovered') }
    ];

    this.symptoms = [
      { val: 'Cough', isChecked: profile.symptoms.includes('Cough') },
      { val: 'Fever', isChecked: profile.symptoms.includes('Fever') },
      { val: 'Tiredness', isChecked: profile.symptoms.includes('Tiredness') },
      { val: 'Difficulty breathing (severe cases)',
        isChecked: profile.symptoms.includes('Difficulty breathing (severe cases)') }
    ];
  }

  getCheckboxOptions(section: string) {
    if (section === 'supplies') {
      return this.supplies.filter((supply) => supply.isChecked === true).map((item) => {
        return item.val;
      });
    }

    if (section === 'coronavirusTesting') {
      return this.coronavirusTesting.filter((testing) => testing.isChecked === true).map((item) => {
        return item.val;
      });
    }

    if (section === 'symptoms') {
      return this.symptoms.filter((symptom) => symptom.isChecked === true).map((item) => {
        return item.val;
      });
    }
  }

  async somethingWentWrongMessage() {
    const alert = await this.alertController.create({
      header: 'Error! Something went wrong.',
      subHeader: 'Try again later or restart the app.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
