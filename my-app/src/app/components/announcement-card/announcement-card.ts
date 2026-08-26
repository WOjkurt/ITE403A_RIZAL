import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css',
})
export class AnnouncementCard {
  @Input() announcement!: { 
    title: string; 
    body: string; 
    author: string; 
    date: string | Date; 
  };
}