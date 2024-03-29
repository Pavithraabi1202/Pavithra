import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PavithraApp';

  public displaymenu = false;

  constructor(private route: Router) {}

  ngDoCheck(): void {
    if (this.route.url == '/pavilogin' || this.route.url == '/') {
      this.displaymenu = false;
    } else {
      this.displaymenu = true;
    }
  }
}
