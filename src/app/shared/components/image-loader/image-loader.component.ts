import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-image-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-loader.component.html',
  styleUrl: './image-loader.component.scss'
})
export class ImageLoaderComponent implements OnInit {

  @Input() imageId!: string;
  imageUrl!: string;
  imageSrc: string | undefined;

  constructor(private httpClient:HttpClient) { 
   
  }
  ngOnInit(): void {
    this.imageUrl = environment.imageApiUrl + this.imageId;
    if (this.imageUrl) {
      this.getImage();
    }
  }

  getImage() {
    this.httpClient.get(this.imageUrl, { responseType: 'blob' }).subscribe({
      next: (imageBlob) => {
        // Create an object URL from the Blob
        this.imageSrc = URL.createObjectURL(imageBlob);
      },
      error: (error) => {
        console.error('Error fetching image:', error);
      }
    });
  }

}
