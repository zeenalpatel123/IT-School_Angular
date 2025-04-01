import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-html',
  imports: [RouterModule],
  templateUrl: './html.component.html',
  styleUrl: './html.component.scss'
})
export class HtmlComponent implements OnInit{
  
  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this._router.events.subscribe((evt: any) => {
      window.scrollTo(0, 0)
    });
  }
}
