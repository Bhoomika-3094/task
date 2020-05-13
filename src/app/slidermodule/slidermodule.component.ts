import { Component, OnInit } from '@angular/core';
import { BannerService } from '../service/banner.service';
import {BannerList} from '../service/banner.model';

@Component({
  selector: 'app-slidermodule',
  templateUrl: './slidermodule.component.html',
  styleUrls: ['./slidermodule.component.css']
})
export class SlidermoduleComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [];
  Bannerlist : BannerList[] = [];
  constructor(private service:BannerService) { }

  ngOnInit() {
    this.getbanner();  }
  getbanner():void{
    this.service.getBannerList().subscribe(
      (data)  =>{
        this.Bannerlist = data;
        for (let i = 0; i < this. Bannerlist.length; i++) {
          this.images.push(this. Bannerlist[i].landscapePosterId);
        }
      }  
     
      )
  }

}
