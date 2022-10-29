import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/app/services/dataprovider';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }

  images: any;

  constructor(private dataProvider: DataProvider) { }

  ngOnInit(): void {

    this.dataProvider.getImages('/banners')
      .then(result => {
        this.images = result;
      })

  }
}