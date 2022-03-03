import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(){
    this.sidenavToggle.emit();
  }
}
