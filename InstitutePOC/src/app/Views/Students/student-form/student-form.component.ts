import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/Services/Student/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { IDeactivateComponent } from 'src/app/Services/Gaurds/CanDeactive/deactivate-guard.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, IDeactivateComponent {

  StudentInfo = new FormGroup({
    studentName: new FormControl(),
    departmentName: new FormControl()
  });
  IsStudentEdit: boolean = false;
  students: Student[] = [];
  student: Student = null;
  id: Number = 0;

  constructor(private studentService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.studentService.GetAll().subscribe(data => {
      this.students = data;
    })
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.id = (+params.get('Id'));

      this.studentService.Get(this.id).subscribe(data => {
        this.student = data;
      });

      if (this.id != 0) {
        this.IsStudentEdit = true;

        this.StudentInfo = new FormGroup({
          studentName: new FormControl(this.student.Name),
          departmentName: new FormControl(this.student.DepartmentName)
        });
      } else {
        this.IsStudentEdit = false;
        this.StudentInfo = new FormGroup({
          studentName: new FormControl(),
          departmentName: new FormControl()
        });
      }
    })
  }
  OnSubmit() {
    if (!this.IsStudentEdit) {
      let lastStudent = this.students[this.students.length - 1].Id;
      this.studentService.Add(new Student((+lastStudent + 1),
        this.StudentInfo.value.studentName,
        this.StudentInfo.value.departmentName));

      this.router.navigate(['/home']);
    }
    else {
      this.studentService.Update(new Student(this.id,
        this.StudentInfo.value.studentName,
        this.StudentInfo.value.departmentName));

      this.router.navigate(['/home']);
    }
  }
  Cancel() {
    // this.router.navigate(['/home']);
  }
  canExit(): boolean {
    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }
}
