import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    // tslint:disable-next-line:typedef
    loadChildren: () => import('./todos/todos.module').then((m) => m.TodosPageModule)
  },
  {
    path: 'projects',
    // tslint:disable-next-line:typedef
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsPageModule)
  },
  {
    path: 'landingpage',
    // tslint:disable-next-line:typedef
    loadChildren: () => import('./pages/landingpage/landingpage.module').then((m) => m.LandingpagePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
