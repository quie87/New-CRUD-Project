import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full'
  },
  {
    path: 'landingpage',
    // tslint:disable-next-line:typedef
    loadChildren: () => import('./pages/landingpage/landingpage.module').then((m) => m.LandingpagePageModule)
  },
  {
    path: 'main',
    // tslint:disable-next-line:typedef
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./app/pages/landingpage/signin/signin.module').then( m => m.SigninPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
