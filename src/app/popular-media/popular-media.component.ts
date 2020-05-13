import { Component, OnInit } from '@angular/core';
import {Mediacontent} from '../service/Mediacontent.model';
import {MediaService} from '../service/media.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-popular-media',
  templateUrl: './popular-media.component.html',
  styleUrls: ['./popular-media.component.css']
})
export class PopularMediaComponent implements OnInit {
  mediaList : Mediacontent;
  

  constructor(private service:MediaService) { }

  ngOnInit() {
    this.getMediaList();
  }
  
  getMediaList() : void {
    this.service.getmediaList().subscribe(
      (data)=>{
        console.log(data);
        this.mediaList = data;
  
      },
      (error)=>{
        console.log(error);
      }
    )
    
    
  }
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 6
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    spaceBetween: 30
  };
 

}
