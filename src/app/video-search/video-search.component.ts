import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css'],
  providers: [VideoService]
})
export class VideoSearchComponent implements OnInit {

  videos: any = {
    items: []
  };

  query: string = "";

  constructor(private _videoService: VideoService) { }

  ngOnInit() {    
  }

  searchVideo() {
    console.log("Search: ", this.query);
    this._videoService.searchVideos(this.query)
      .subscribe(resVideoData => this.videos = resVideoData);  
  }

}
