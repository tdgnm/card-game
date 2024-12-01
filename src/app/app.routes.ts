import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GameComponent } from './game/game.component';
import { ItemsComponent } from './items/items.component';
import { InfoComponent } from './info/info.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'game', component: GameComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', component: NotFoundComponent },
];
