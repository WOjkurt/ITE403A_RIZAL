import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProfileCard } from './components/profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Footer,
    ProfileCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-app');

  isLoading = signal(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }

  announcements = [
    {
      title: "Enrollment is now open",
      body: "Enroll now",
      author: "Registrar's Office",
      date: "2026-08-01",
      isPinned: false
    },
    {
      title: "Intramurals 2026",
      body: "Join us",
      author: "Sports Development Office",
      date: "2026-08-02",
      isPinned: false
    },
    {
      title: "School Orientation",
      body: "8:00 AM",
      author: "Academic Affairs",
      date: "2026-08-06",
      isPinned: false
    },
  ];

  onPinAnnouncement(announcement: any): void {
    announcement.isPinned = !announcement.isPinned;
  }

  onDeleteAnnouncement(index: number): void {
    this.announcements.splice(index, 1);
  }
}