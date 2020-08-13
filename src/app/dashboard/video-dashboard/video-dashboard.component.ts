import { Component, OnInit } from '@angular/core';

import { Video } from '../../app-types';
import { VideoLoaderService } from '../../video-loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'jb-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videos: Observable<Video[]>;
  selectedVideo?: Video;

  constructor(vls: VideoLoaderService) {
    this.videos = vls.loadVideos();
  }

  ngOnInit(): void {
  }

  setSelectedVideo(video: Video): void {
    this.selectedVideo = video;
  }

}
