import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { BattlePageComponent } from './component/battle-page/battle-page.component';
import { NerdFightComponent } from './component/nerd-fight/nerd-fight.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/userCrud/login/login.component';
import { RegisterComponent } from './component/userCrud/register/register.component';
import { AuthService } from './services/auth.service';
import { BattlesService } from './services/battles.service';
import { BattleIndexComponent } from './component/battle/battle-index/battle-index.component';
import { CommentsService } from './services/comments.service';
import { LogoutComponent } from './component/userCrud/logout/logout.component';



const routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'nerdFight', component: NerdFightComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'battle', component: BattlePageComponent },
  { path: '**', component: HomePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BattlePageComponent,
    NerdFightComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    BattleIndexComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    BattlesService,
    CommentsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
