import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html-audio',
  imports: [],
  templateUrl: './html-audio.component.html',
  styleUrl: './html-audio.component.scss'
})

export class HtmlAudioComponent {
  constructor(
    private _router: Router,
  ) {} 
  
  ngOnInit(): void {
    this._router.events.subscribe((evt: any) => {
      window.scrollTo(0, 0)
      });
  }
}
