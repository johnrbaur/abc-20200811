import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoLoaderService } from '../../video-loader.service';

@Component({
  selector: 'jb-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videos: Observable<Video[]>;
  selectedVideo: Observable<Video | undefined>;
  videoId: Observable<string | null>;

  constructor(vls: VideoLoaderService, route: ActivatedRoute) {
    this.videos = vls.loadVideos();

    this.videoId = route.queryParamMap.pipe(
      map(params => params.get('id'))
    );

    this.selectedVideo = this.videoId.pipe(
      switchMap(id => id ? vls.loadVideoById(id) : of(undefined))
    );
  }

  ngOnInit(): void {
  }
}
