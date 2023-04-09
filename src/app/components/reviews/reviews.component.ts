import { Component } from '@angular/core';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    autoplay: true,
    breakpoints: {
        300: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        950: {
          slidesPerView: 3,
          spaceBetween: 20
        }
    }
  }

  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  constructor(){
    Swiper.use([Navigation, Pagination, Autoplay]);
  }

}
