import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { Staff } from 'src/app/Models/Staff';
import { AuthService } from '../../Login/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  IsStudent: boolean = true;
  IsStaff: boolean = false;
  IsDepartment: boolean = false;
  Departments: Department[] = [];
  Students: Student[] = [];
  Staffs: Staff[] = [];

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {
    this.Departments = this.route.snapshot.data['departments'];
    this.Staffs = this.route.snapshot.data['staffs'];
    this.Students = this.route.snapshot.data['students'];
  }

  OnTypeChange($event) {
    if ($event.srcElement.defaultValue == 'IsStaff') {
      this.IsStaff = true;
      this.IsStudent = false;
      this.IsDepartment = false;
    }
    else if ($event.srcElement.defaultValue == 'IsStudent') {
      this.IsStaff = false;
      this.IsStudent = true;
      this.IsDepartment = false;
    }
    else if ($event.srcElement.defaultValue == 'IsDepartment') {
      this.IsStaff = false;
      this.IsStudent = false;
      this.IsDepartment = true;
    }
  }

}
