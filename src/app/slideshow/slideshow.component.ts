import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = [
    '../assets/img/code-g8e568109d_1920.jpg',
    '../assets/img/get-me-out-1605906_1280.jpg',
    '../assets/img/office.jpg',
  ];
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    'Graduated at TUM',
  ];
  currentImage = 0;
  showImage = true;
  showHeadline = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      this.showHeadline = false;

      setTimeout(() => {
        this.showImage = true;
        this.showHeadline = true;
      }, 0.8);
    }, 4000);
  }
}
