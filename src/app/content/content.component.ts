import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { HtmlComponent } from "./html/html.component";
import {MatTabsModule} from '@angular/material/tabs';
import { CssComponent } from "./css/css.component";
import { ViewportScroller } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-content',
  imports: [RouterModule, HtmlComponent, MatTabsModule, CssComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  // lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this._router.events.subscribe((evt: any) => {
      window.scrollTo(0, 0)
      });
  }
}
