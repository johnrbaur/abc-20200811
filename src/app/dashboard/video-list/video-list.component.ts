import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'jb-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  @Output() videoSelected = new EventEmitter<Video>();
  @Input() videoList: Video[] = [];
  @Input() selectedVideoId?: string;

  constructor() {}

  ngOnInit(): void {}
}
