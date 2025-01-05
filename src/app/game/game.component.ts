import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BackComponent } from '../_components/back/back.component';
import { HomeComponent } from '../_components/home/home.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GAME_URL } from '../../globals';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
      BackComponent,
      HomeComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit, AfterViewInit, OnDestroy {
  url: SafeResourceUrl;
  @ViewChild('iframeElement', { static: true }) iframeElement!: ElementRef<HTMLElement>;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(GAME_URL);
  }

  ngAfterViewInit(): void {
    const iframe = this.iframeElement.nativeElement;
    iframe.onload = () => {
      iframe.focus();
    };
  }

  ngOnInit() {
    window.addEventListener("message", this.receiveMessage, false);
  }

  ngOnDestroy() {
    window.removeEventListener("message", this.receiveMessage, false);
  }

  receiveMessage(event: MessageEvent) {
    console.log('Received message from iframe:', event.data);
  }
}
