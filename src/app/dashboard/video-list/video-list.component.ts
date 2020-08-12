import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'jb-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[] = [];
  selectedVideoId?: string;

  constructor() {}

  ngOnInit(): void {}

  selectVideo(id: string): void {
    this.selectedVideoId = id;
  }
}
