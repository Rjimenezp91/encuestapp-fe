import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log('en on init');
    
    this.renderer.setStyle(document.body, 'background-color', 'gray')
    this.renderer.setStyle(document.querySelector('.center'), 'background-color', 'gray')
  }

}
