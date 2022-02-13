import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TrimPipe } from './pipes/trim.pipe';
import { MyDatePipe } from './pipes/my-date.pipe';
import { TrimDirective } from './directives/trim.directive';
import { ChangeStyleDirective } from './directives/change-style.directive';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'
import { AuthGuard } from './guard/auth.guard';
import { Auth1Guard } from './guard/auth1.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const route: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./forms/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [Auth1Guard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TrimDirective,
    ChangeStyleDirective,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
