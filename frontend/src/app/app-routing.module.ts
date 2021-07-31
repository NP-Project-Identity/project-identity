import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./folder/folder.module').then(m => m.FolderPageModule),
  },
  {
    path: 'safeentry',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./safeentry/safeentry.module').then(m => m.SafeentryPageModule),
  },
  {
    path: 'forum',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./forum/forum.module').then(m => m.ForumPageModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'events',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./events/events.module').then(m => m.EventsPageModule),
  },
  {
    path: 'learningmgtplatform',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./learningmgtplatform/learningmgtplatform.module').then(
        m => m.LearningmgtplatformPageModule,
      ),
  },
  {
    path: 'rewards',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./rewards/rewards.module').then(m => m.RewardsPageModule),
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./account/account.module').then(m => m.AccountPageModule),
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./settings/settings.module').then(m => m.SettingsPageModule),
  },
  {
    path: 'logout',
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./logout/logout.module').then(m => m.LogoutPageModule),
  },
  {
    path: 'class',
    canActivate: [AuthGuard],
    loadChildren: () => import('./class/class.module').then(m => m.ClassPageModule)
  },
  {
    path: 'class-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./class-list/class-list.module').then(m => m.ClassListPageModule)
  },
  {
    path: 'achievement',
    canActivate: [AuthGuard],
    loadChildren: () => import('./achievement/achievement.module').then(m => m.AchievementPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
