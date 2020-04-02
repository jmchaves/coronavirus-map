import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';

import { AuthService } from '../../services/auth/auth.service';
import { UserProfile } from '../../models/user-profile';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-signup-modal',
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.scss'],
})
export class LoginSignupModalComponent implements OnInit {

  loginHidden: boolean;
  loginErrors: string[];
  signupErrors: string[];
  loginForm: FormGroup;
  signupForm: FormGroup;
  currentlySegment: string;
  loading: boolean;

  constructor(
    private modalCtrl: ModalController,
    public alertController: AlertController,
    public authService: AuthService
    ) { }

  ngOnInit() {
    this.currentlySegment = 'login';
    this.loading = false;
    this.createLoginForm();
    this.createSignUpForm();
  }

  dismissModal(profilep: UserProfile = null) {
    this.modalCtrl.dismiss({
      dismissed: true,
      profile: profilep
    });
  }

  segmentChanged(event) {
    this.loginForm.reset();
    this.signupForm.reset();
    this.loginHidden = !this.loginHidden;
  }

  loginOrSignup(action: string) {
    if (action === 'login') {
      if (this.loginForm.valid) {
        this.login();
      }
    } else {
      if (this.signupForm.valid) {
        this.signup();
      }
    }
  }

  login() {
    this.loading = true;
    const emailAddress = this.loginForm.get('emailAddress').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(emailAddress, password).pipe(take(1)).
    subscribe({
      next: (profile) => {
        this.loading = false;
        this.dismissModal(profile);
      },
      error: (errors) => {
        this.loading = false;
        if (errors && errors.emailVerified === false) {
          this.loginErrors = [`Your email address hasn't been verified yet, please check out your inbox.`];
        } else {
          this.loginErrors = ['Incorrect email address or password.'];
        }
        setTimeout(() => {
          this.loginErrors = [];
        }, 7000);
      },
    });
  }

  signup() {
    this.loading = true;
    const password = this.signupForm.get('newPassword').value;
    this.authService.signUp(this.getProfileData(), password).pipe(take(1)).
    subscribe({
      next: (profile) => {
        this.loading = false;
        this.successSignUp();
      },
      error: (errors) => {
        this.loading = false;
        if (errors && errors.code === 'auth/email-already-in-use') {
          this.signupErrors = ['The email address is already in use by another account.'];
        } else {
          this.somethingWentWrongMessage();
        }
        setTimeout(() => {
          this.signupErrors = [];
        }, 5000);
      },
    });
  }

  createSignUpForm(): void {
    this.signupForm = new FormGroup({
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(150),
        // reg ex for emal: https://www.regular-expressions.info/email.html
        // Check: https://firebase.google.com/docs/reference/security/database/regex
        Validators.pattern(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)
      ]),
      birthday: new FormControl(new Date(), Validators.required),
      gender: new FormControl(''),
      zipcode: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(6),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]),
      firstName: new FormControl('', [Validators.maxLength(150)]),
      lastName: new FormControl('', [Validators.maxLength(150)]),
      updatedDate: new FormControl(new Date()),
    });
  }

  createLoginForm(): void {
    this.loginForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(150)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  getProfileData(): UserProfile {
    const data = new UserProfile(
      firebase.firestore.Timestamp.fromDate(new Date(this.signupForm.get('birthday').value)),
      [],
      null,
      [],
      [],
      [],
      firebase.firestore.Timestamp.fromDate(new Date()),
      this.signupForm.get('gender').value,
      this.signupForm.get('zipcode').value
    );

    data.email = this.signupForm.get('emailAddress').value;
    data.firstName = this.signupForm.get('firstName').value;
    data.lastName = this.signupForm.get('lastName').value;
    return data;
  }

  async successSignUp() {
    const alert = await this.alertController.create({
      header: 'You signed up successfully',
      message: 'An email was sent to you to verify your email then you can login.',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: (resp) => {
            this.currentlySegment = 'login';
          }
        }
      ]
    });

    await alert.present();
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
