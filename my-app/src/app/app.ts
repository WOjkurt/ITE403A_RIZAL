import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProfileCard } from './components/profile-card/profile-card';
import { AnnouncementCard } from './components/announcement-card/announcement-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Footer,
    ProfileCard,
    AnnouncementCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

  announcements = [
    {
      title: "Enrollment is now open",
      body: "Enroll now",
      author: "Registrar's Office",
      date: "2026-08-01"
    },
    {
      title: "Intramurals 2026",
      body: "Join us",
      author: "Sports Development Office",
      date: "2026-08-02"
    },
    {
      title: "School Orientation",
      body: "8:00 AM",
      author: "Academic Affairs",
      date: "2026-08-06"
    },
    
  ];

  
  students = [
    { name: 'Juan Dela Cruz', course: 'BSIT', year: '2nd Year' },
    { name: 'Maria Santos', course: 'BSIT', year: '3rd Year' },
    { name: 'Pedro Garcia', course: 'BSCS', year: '1st Year' },
    { name: 'Ana Reyes', course: 'BSIS', year: '4th Year' }
  ];
}