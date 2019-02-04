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
  private _deleteUrl = "/api/video/";

  private _searchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyC7QseGbdJp2wtD8tT1suUJAnFK2jpnYHU";

  constructor(private _http: HttpClient) { }

  searchVideos(query) {
    return this._http.get(this._searchUrl + "&q=" + query);
  }

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

  deleteVideo(video: Video) {
    return this._http.delete<Video>(this._deleteUrl + video._id);
  }
}
