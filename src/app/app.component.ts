import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encuestapp-fe';
  showFiller = false;
  isOpen:boolean= false;

  toogle() {
    this.isOpen = !this.isOpen
  }
}
