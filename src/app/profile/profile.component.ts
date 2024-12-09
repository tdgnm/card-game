import { Component, OnInit } from '@angular/core';
import { NzButtonComponent } from "ng-zorro-antd/button";
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ItemService } from '../_services/item.service';
import { Item } from '../_interfaces/item';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzCardComponent,
    NgForOf,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getItems(): void {
    this.itemService.getItems().subscribe((value) => this.items = value);
  }
}
