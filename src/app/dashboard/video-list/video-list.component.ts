import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'jb-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[] = [];
  @Input() selectedVideoId: string | undefined | null;

  constructor() {}

  ngOnInit(): void {}
}
