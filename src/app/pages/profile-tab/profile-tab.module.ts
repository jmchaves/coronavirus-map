import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileTabPage } from './profile-tab.page';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SymptomsComponent } from '../../components/symptoms/symptoms.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
import { SuppliesComponent } from '../../components/supplies/supplies.component';
import { Covid19TestingComponent } from '../../components/covid19-testing/covid19-testing.component';
import { LoginSignupModalComponent } from '../../components/login-signup-modal/login-signup-modal.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ProfileTabPage }])
  ],
  declarations: [
    ProfileTabPage,
    ProfileComponent,
    SymptomsComponent,
    UserInfoComponent,
    SuppliesComponent,
    Covid19TestingComponent,
    LoginSignupModalComponent,
    LoginComponent,
    SignupComponent
  ],
  entryComponents: [LoginSignupModalComponent]
})
export class ProfileTabPageModule {}
