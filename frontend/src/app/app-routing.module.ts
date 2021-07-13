import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then(m => m.FolderPageModule),
  },
  {
    path: 'safeentry',
    loadChildren: () =>
      import('./safeentry/safeentry.module').then(m => m.SafeentryPageModule),
  },
  {
    path: 'forum',
    loadChildren: () =>
      import('./forum/forum.module').then(m => m.ForumPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.module').then(m => m.EventsPageModule),
  },
  {
    path: 'learningmgtplatform',
    loadChildren: () =>
      import('./learningmgtplatform/learningmgtplatform.module').then(
        m => m.LearningmgtplatformPageModule,
      ),
  },
  {
    path: 'rewards',
    loadChildren: () =>
      import('./rewards/rewards.module').then(m => m.RewardsPageModule),
  },
  {
    path: 'triumps',
    loadChildren: () =>
      import('./triumps/triumps.module').then(m => m.TriumpsPageModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(m => m.AccountPageModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(m => m.SettingsPageModule),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./logout/logout.module').then(m => m.LogoutPageModule),
  },
  {
    path: 'class',
    loadChildren: () => import('./class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: 'class-list',
    loadChildren: () => import('./class-list/class-list.module').then( m => m.ClassListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
