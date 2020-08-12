import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../app-types';

@Component({
  selector: 'jb-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videos: Video[] = [];
  selectedVideo?: Video;

  constructor(http: HttpClient) {
    http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe(videoList => this.videos = videoList);
  }

  ngOnInit(): void {
  }

  setSelectedVideo(video: Video): void {
    this.selectedVideo = video;
  }

}
