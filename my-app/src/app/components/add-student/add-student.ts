import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudentComponent { }