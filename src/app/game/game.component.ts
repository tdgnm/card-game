import { Component } from '@angular/core';
import { BackComponent } from '../_components/back/back.component';
import { HeaderComponent } from '../_components/header/header.component';
import { HomeComponent } from '../_components/home/home.component';

@Component({
  selector: 'app-game',
  standalone: true,
    imports: [
        BackComponent,
        HeaderComponent,
        HomeComponent,
    ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
