import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosService } from './photos.service';
import { Photo } from './photo.interface';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  providers: [PhotosService],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  myPhotos:Photo[] = [];
  p: number | undefined;
  constructor(private photosService: PhotosService) { }
  ngOnInit(): void {
    this.photosService.getPhotos().subscribe((photos) => {
      this.myPhotos = photos;
      this.p = 1
    });
  }
}
