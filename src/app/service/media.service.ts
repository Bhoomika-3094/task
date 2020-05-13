import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Mediacontent} from "../service/Mediacontent.model";
import { PopularMedia } from '../popular-media/Media.model';
import{MediaCategories} from "../media-content/mediaCategories.model";
 

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  appUrl : string = 'http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v2/media/getHomeScreenMediaContentPopularAndUICategory';
  constructor(private httpclient : HttpClient) { }
  getmediaList() : Observable<Mediacontent> {
   return this.httpclient.get<Mediacontent>(this.appUrl);
  }
}
