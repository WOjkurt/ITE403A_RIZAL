import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-profile-card',
  imports: [UpperCasePipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',

})
export class ProfileCard {
  StudentName:string = "Kurt Wojtyle S. Rizal";
  StudentID =23017245
  Course:string = "BSIT";
  Year:string = "IV";
  Section:string = "Undefined";
  Nickname:string = "kurt";
  Username:string = "kurtwojtyle.rizal";
  Domain:string = "@dbtc-cebu.edu.ph";
  Email: string = `${this.Username}${this.Domain}`;
  Grade = 1.0;

 
  
 }
