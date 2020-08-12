import { Component, OnInit } from '@angular/core';

import { Video, mockVideoList } from '../../app-types';

@Component({
  selector: 'jb-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videos: Video[] = mockVideoList;

  constructor() { }

  ngOnInit(): void {
  }

}
