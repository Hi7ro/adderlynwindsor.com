import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = [
    '../assets/img/code-g8e568109d_1920.jpg',
    '../assets/img/get-me-out-1605906_1280.jpg',
    '../assets/img/office.jpg',
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {    
      this.currentImage++
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 0.8);
  }, 4000);
  }
}
