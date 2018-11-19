import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos";
  private _postUrl = "/api/video";
  private _putUrl = "/api/video/";

  constructor(private _http: HttpClient) { }

  getVideos() {
    return this._http.get<Video[]>(this._getUrl);
  }

  addVideo(video: Video) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.post<Video>(this._postUrl, JSON.stringify(video), options);
  }

  updateVideo(video: Video) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.put<Video>(this._putUrl + video._id, JSON.stringify(video), options);
  }
}
