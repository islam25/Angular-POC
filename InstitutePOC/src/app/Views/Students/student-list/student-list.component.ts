import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/Student/student.service';
import { AuthService } from '../../Login/Auth/auth.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() studs: Student[] = [];
  student: Student = new Student(0 , '' ,'');
  idToRemove: Number = 0;

  constructor(private studentService: StudentService, private auth: AuthService) { }

  ngOnInit() {
  }
  OnShow(student){
    this.student = student;
  }
  SetToRemove(id){
    this.idToRemove = id;
  }
  OnRemove(){
    this.studentService.Delete(this.idToRemove);
  }
}
