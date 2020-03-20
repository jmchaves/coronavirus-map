import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelpTabPage } from './help-tab.page';
import { HelpComponent } from '../../components/help/help.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HelpTabPage }])
  ],
  declarations: [HelpTabPage, HelpComponent]
})
export class HelpTabPageModule {}
