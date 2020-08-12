import { Component, OnInit } from '@angular/core';

import { Video, mockVideoList } from '../../app-types';

@Component({
  selector: 'jb-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videos: Video[] = mockVideoList;
  selectedVideo?: Video;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedVideo(video: Video): void {
    this.selectedVideo = video;
  }

}
