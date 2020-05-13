import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlidermoduleComponent } from './slidermodule/slidermodule.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PopularMediaComponent } from './popular-media/popular-media.component';
import { MediaContentComponent } from './media-content/media-content.component'; 

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HttpClientModule} from '@angular/common/http';
// import { CarouselModule } from 'ngx-owl-carousel-o';
 

@NgModule({
  declarations: [
    AppComponent,
    SlidermoduleComponent,
    PopularMediaComponent,
    MediaContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    OwlModule,
    HttpClientModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
