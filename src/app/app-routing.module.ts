import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] // Sử dụng AuthGuard ở đây nếu bạn muốn bảo vệ route 'home'
  },

  {
    path: 'list',
    loadChildren: () =>  import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] // Sử dụng AuthGuard ở đây nếu bạn muốn bảo vệ route 'list'
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./screens/product/product.module').then( m => m.ProductPageModule),
    canActivate: [AuthGuard] // Sử dụng AuthGuard ở đây nếu bạn muốn bảo vệ route 'list'
  },
  {
    path: 'login',
    loadChildren: () => import('./layout/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard] // Sử dụng AuthGuard ở đây nếu bạn muốn bảo vệ route 'profile'
  },
  {
    path: 'feeds',
    loadChildren: () => import('./page/feeds/feeds.module').then( m => m.FeedsPageModule),
    canActivate: [AuthGuard] // Sử dụng AuthGuard ở đây nếu bạn muốn bảo vệ route 'feeds'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./page/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard] // Sử dụng AuthGuard ở đây nếu bạn muốn bảo vệ route 'feeds'
  },
  {
    path: 'heard',
    loadChildren: () => import('./layout/heard/heard.module').then( m => m.HeardPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
