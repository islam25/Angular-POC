import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/Department/department.service';
import { Department } from 'src/app/Models/Department';
import { Router, ActivatedRoute } from '@angular/router';
import { IDeactivateComponent } from 'src/app/Services/Gaurds/CanDeactive/deactivate-guard.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit, IDeactivateComponent {

  departmentInfo = new FormGroup({
    departmentName: new FormControl()
  });
  depts: Department[] = [];
  code: Number = 0;
  IsEdit: boolean = false;

  constructor(private departmentService: DepartmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.departmentService.GetAll().subscribe(data => {
      this.depts = data;
    });

    this.activatedRoute.queryParamMap.subscribe(res => {
      this.code = +res.get('code');
      if (this.code != 0) {
        let deptName = '';

        let dept = this.activatedRoute.snapshot.data['department'];
        deptName = dept.Title;
        this.IsEdit = true;
        this.departmentInfo = new FormGroup({
          departmentName: new FormControl(deptName)
        });
      }
    })
  }
  OnSubmit() {
    if (!this.IsEdit) {
      let lastDept = this.depts[this.depts.length - 1].Code;
      this.departmentService.Add(new Department((+lastDept + 1), this.departmentInfo.value.departmentName));
      this.router.navigate(['/home']);
    }
    else {
      this.departmentService.Update(new Department(this.code, this.departmentInfo.value.departmentName));
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