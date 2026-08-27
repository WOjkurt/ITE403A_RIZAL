import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentListComponent {

  editingStudent: string | null = null;

  students = [
    { id: '1', name: 'Juan Dela Cruz', course: 'BSIT', year: '2nd Year', isFavorite: false, active: true },
    { id: '2', name: 'Maria Santos', course: 'BSIT', year: '3rd Year', isFavorite: false, active: false },
    { id: '3', name: 'Pedro Garcia', course: 'BSME', year: '1st Year', isFavorite: false, active: true },
    { id: '4', name: 'Ana Reyes', course: 'BSME', year: '4th Year', isFavorite: false, active: false }
  ];

  onEditStudent(student: any): void {
    this.editingStudent = student.name;
    console.log(`Editing ${student.name}`);
  }

  onToggleActive(student: any): void {
    student.active = !student.active;
    console.log(`${student.name} active status:`, student.active);
  }

  onFavoriteStudent(student: any): void {
    student.isFavorite = !student.isFavorite;
    console.log(`${student.name} favorite status:`, student.isFavorite);
  }

  onDeleteStudent(index: number): void {
    console.log('Deleting student at index:', index, this.students[index]);
    this.students.splice(index, 1);
  }
}