import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GameComponent } from './game/game.component';
import { InfoComponent } from './info/info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailsComponent } from './cards/card-details/card-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'game', component: GameComponent },
  {
    path: 'cards', component: CardsComponent,
    children: [
      { path: ':id', component: CardDetailsComponent },
    ]
  },
  { path: 'info', component: InfoComponent },
  { path: '**', component: NotFoundComponent },
];
