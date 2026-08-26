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
  editingStudent: string | null = null;

  onEditStudent(student: any): void {
    this.editingStudent = student.name;
    console.log(`Editing ${student.name}`);
  }




  students = [
    { name: 'Juan Dela Cruz', course: 'BSIT', year: '2nd Year', isFavorite: false },
    { name: 'Maria Santos', course: 'BSIT', year: '3rd Year', isFavorite: false },
    { name: 'Pedro Garcia', course: 'BSCS', year: '1st Year', isFavorite: false },
    { name: 'Ana Reyes', course: 'BSIS', year: '4th Year', isFavorite: false }
  ];

  onFavoriteStudent(student: any): void {
    student.isFavorite = !student.isFavorite;
    console.log(`${student.name} favorite status:`, student.isFavorite);
  }
  onDeleteStudent(index: number): void {
    console.log('Deleting student at index:', index, this.students[index]);
    this.students.splice(index, 1);
  }
}