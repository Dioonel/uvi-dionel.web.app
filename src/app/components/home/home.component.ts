import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  scrollIntoView(elem: string) {
    console.log(elem);
    let element = document.querySelector(`app-${elem}`);
    if(element) element.scrollIntoView({block: 'start'});                      // behavior: 'smooth' is bugged at least in opera
  }

}
