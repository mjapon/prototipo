import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { FeaturesComponent } from './modules/general/features/features.component';

import { HomeComponent } from './modules/general/home/home.component';
import { NivelesComponent } from './modules/general/niveles/niveles.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { SearchComponent } from './modules/general/searchproduct/searchproduct.component';
import { StartComponent } from './modules/general/start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent, },
  {
    path: 'niveles', component:NivelesComponent,
  },
  {
    path: 'home', component:HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'gestion', component: SearchComponent
  },
  {
    path: 'feature/:codbarra', component: FeaturesComponent
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }