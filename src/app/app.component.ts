import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./content/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'IT-School';
}
