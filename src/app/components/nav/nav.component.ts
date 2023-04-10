import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navExpanded = false;

  @Output() scrollIntoView = new EventEmitter<string>();

  constructor() { }

  onNavCheckClick() {
    let nav = document.querySelector('.nav');
    if(nav) nav.classList.toggle('nav-expanded');
  }

  onScrollIntoView(elem: string) {
    this.scrollIntoView.emit(elem);
    let check = document.getElementById('nav-check') as HTMLInputElement;
    if(check) {
      check.checked = false;
      this.onNavCheckClick();
    }
  }
}
