import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list';
import { StudentDetailComponent } from './components/student-detail/student-detail';
import { AddStudentComponent } from './components/add-student/add-student';

export const routes: Routes = [

    { path: '', redirectTo: 'students', pathMatch: 'full' },


    { path: 'students', component: StudentListComponent },

    { path: 'students/add', component: AddStudentComponent },

    { path: 'students/:id', component: StudentDetailComponent },

    { path: '**', redirectTo: 'students' }
];