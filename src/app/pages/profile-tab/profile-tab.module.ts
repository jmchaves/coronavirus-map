import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabPage } from './profile-tab.page';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SymptomsComponent } from '../../components/symptoms/symptoms.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
import { SuppliesComponent } from '../../components/supplies/supplies.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileTabPage }])
  ],
  declarations: [ProfileTabPage, ProfileComponent, SymptomsComponent, UserInfoComponent, SuppliesComponent]
})
export class ProfileTabPageModule {}
