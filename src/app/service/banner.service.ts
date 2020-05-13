import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BannerList} from "../service/banner.model";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  appUrl : string = 'http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v2/media/fetchAllMediaSlider';
  constructor(private httpclient : HttpClient) { }
  getBannerList() : Observable<BannerList[]> {
   return this.httpclient.get<BannerList[]>(this.appUrl);
  }
}
