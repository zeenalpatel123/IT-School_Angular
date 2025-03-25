import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HtmlComponent } from "./html/html.component";
import {MatTabsModule} from '@angular/material/tabs';
import { CssComponent } from "./css/css.component";

@Component({
  selector: 'app-content',
  imports: [RouterModule, HtmlComponent, MatTabsModule, CssComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  // lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
}
