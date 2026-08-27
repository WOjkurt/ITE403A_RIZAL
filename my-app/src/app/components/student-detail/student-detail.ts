import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);


  allStudents = [
    { id: '1', name: 'Juan Dela Cruz', course: 'BSIT', year: '2nd Year', isFavorite: false, active: true },
    { id: '2', name: 'Maria Santos', course: 'BSIT', year: '3rd Year', isFavorite: false, active: false },
    { id: '3', name: 'Pedro Garcia', course: 'BSME', year: '1st Year', isFavorite: false, active: true },
    { id: '4', name: 'Ana Reyes', course: 'BSME', year: '4th Year', isFavorite: false, active: false }
  ];


  student = {
    id: '',
    name: '',
    course: '',
    year: '',
    active: false
  };

  ngOnInit() {

    const idFromUrl = this.route.snapshot.paramMap.get('id');

    if (idFromUrl) {

      const foundStudent = this.allStudents.find(s => s.id === idFromUrl);

      if (foundStudent) {
        this.student = foundStudent;
      } else {

        this.student = {
          id: idFromUrl,
          name: `Student #${idFromUrl}`,
          course: 'BSIT',
          year: '1st Year',
          active: true
        };
      }
    }
  }
}