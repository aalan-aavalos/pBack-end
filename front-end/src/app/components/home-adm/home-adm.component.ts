import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient si no está importado


@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent {
  videos: any[] = []; // Array para almacenar los videos
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getYouTubeVideos();
  }
  @ViewChild('videoContainer') videoContainer!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.videoContainer) {
      const yOffset = window.pageYOffset;
      this.videoContainer.nativeElement.style.top = `${yOffset}px`;
    }
  }

  playVideo(videoId: string) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
  
    const videoContainer = document.getElementById('video-container');
    if (videoContainer !== null) {
      videoContainer.innerHTML = '';
      videoContainer.appendChild(iframe);
    } else {
      console.error('Element with ID "video-container" not found.');
    }
  }
  
  

  // Resto del código...

  getYouTubeVideos() {
    const API_KEY = 'AIzaSyDWKaWWRhudvqor97QHtJJ7u5NjPBSaQk4'; // Reemplaza con tu propia clave de API
    const CHANNEL_ID = 'UCam8T03EOFBsNdR0thrFHdQ'; // Reemplaza con el ID del canal de YouTube que deseas mostrar

    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;

    this.http.get(url)
      .subscribe((response: any) => {
        this.videos = response.items;
        console.log(this.videos); // Puedes eliminar esta línea, se utiliza para ver la respuesta en la consola
      });
  }
}
