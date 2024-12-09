import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { NzCardComponent } from "ng-zorro-antd/card";
import { HeaderComponent } from '../_components/header/header.component';
import { Card } from '../_interfaces/card';
import { CardService } from '../_services/card.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgForOf,
    NzCardComponent,
    HeaderComponent,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit():void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards().subscribe((value) => this.cards = value);
  }
}
