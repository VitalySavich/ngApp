import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  selectedVideo: Video;
  private hidenewVideo: boolean = true;

  /*videos: Video[] = [
    {"_id": "1", "title": "Title 1", "url": "Url 1", "description": "Desc 1"},
    {"_id": "2", "title": "Title 2", "url": "Url 2", "description": "Desc 2"},
    {"_id": "3", "title": "Title 3", "url": "Url 3", "description": "Desc 3"},
    {"_id": "4", "title": "Title 4", "url": "Url 4", "description": "Desc 4"}
  ];*/

  videos: Array<Video>;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hidenewVideo = false;
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hidenewVideo = true;
        this.selectedVideo = resNewVideo;
      });

  }


}
