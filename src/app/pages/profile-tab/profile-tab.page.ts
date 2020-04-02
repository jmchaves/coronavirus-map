import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    public alertController: AlertController,
    private router: Router,
    public modalController: ModalController,
    public authService: AuthService,
    public profileService: ProfileService
    ) { }

  ngOnInit() {
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
    console.log('saveChanges');
  }

  logout() {
    this.authService.logout();
  }
}
