import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NzProgressComponent } from 'ng-zorro-antd/progress';
import { interval, take } from 'rxjs';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    NzProgressComponent,
    NzCardComponent,
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit {
  progress = 100;

  constructor(private location: Location) { }

  ngOnInit(): void {
    interval(50).pipe(take(100)).subscribe({
      next: n => this.progress = 99 - n,
      complete: () => this.back(),
    });
  }

  back(): void {
    this.location.back();
  }
}
