import { Component } from '@angular/core';
import { HeaderComponent } from '../_components/header/header.component';
import { NewGameComponent } from '../_components/new-game/new-game.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NewGameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
