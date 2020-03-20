import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'help',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/help-tab/help-tab.module').then(m => m.HelpTabPageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../pages/map-tab/map-tab.module').then(m => m.MapTabPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/profile-tab/profile-tab.module').then(m => m.ProfileTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
