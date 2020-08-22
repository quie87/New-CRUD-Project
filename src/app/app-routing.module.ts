import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // tslint:disable-next-line:typedef
    loadChildren: () => import('./pages/landingpage/landingpage.module').then((m) => m.LandingpagePageModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    // tslint:disable-next-line:typedef
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
