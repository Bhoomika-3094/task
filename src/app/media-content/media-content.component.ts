import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import {Mediacontent} from '../service/Mediacontent.model';
import {MediaService} from '../service/media.service';
import { MediaCategories } from './mediaCategories.model';
import { MediacontentList } from './mediaContentList.model';

@Component({
  selector: 'app-media-content',
  templateUrl: './media-content.component.html',
  styleUrls: ['./media-content.component.css']
})
export class MediaContentComponent implements OnInit {
  mediaList : Mediacontent;
  mediaCategoryList : MediaCategories[]=[];
  list = [];
  // mediaContentList: MediacontentList[] = [];

  constructor(private service : MediaService) { }
  ngOnInit() {
    this.getMediaList();
   
  }
  getMediaList() : void {
    this.service.getmediaList().subscribe(
      (data)=>{
        console.log(data);
        this.mediaList = data;
        this.mediaCategoryList = this.mediaList.mediaContentByCategory;
        // for(let i=0;i<this.mediaCategoryList.length;i++){
        //   this.list.push(this.mediaCategoryList[i].mediaContentList);
        //   alert(JSON.stringify(this.list));
        // }
        
      },
      (error)=>{
        console.log(error);
      }
    )
    } 
   
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    initialSlide: 2,
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
    loop: false,
    spaceBetween: 30
  };
 
  // config: SwiperOptions = {
  //   pagination: { el: '.swiper-pagination', clickable: true },
  //   autoHeight: true,
  //   allowTouchMove: true,
  //   autoplay: {
  //     delay: 6000,
  //     disableOnInteraction: true
  //   },
  //   breakpoints: {
  //     1024: {
  //       slidesPerView: 4
  //     },
  //     500: {
  //       slidesPerView: 3
  //     },
  //     400: {
  //       slidesPerView: 2
  //     },
  //     300: {
  //       slidesPerView: 1
  //     }
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   loop: true
  // };
}