import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../app-types';

@Component({
  selector: 'jb-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() video?: Video;
  @Input() selected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
