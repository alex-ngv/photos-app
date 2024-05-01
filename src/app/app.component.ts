import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosComponent } from './photos/photos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PhotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Photo app';
}
