import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sunnyside-agency';

  menu:boolean = true;

  toggleMenu() {
    this.menu = !this.menu;
  }

}
