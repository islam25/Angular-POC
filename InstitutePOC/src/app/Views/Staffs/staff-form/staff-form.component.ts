import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StaffService } from 'src/app/Services/Staff/staff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/Models/Staff';
import { IDeactivateComponent } from 'src/app/Services/Gaurds/CanDeactive/deactivate-guard.service';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit, IDeactivateComponent {

  EmployeeInfo = new FormGroup({
    employeeName: new FormControl(),
    salary: new FormControl(),
    departmentName: new FormControl()
  });
  IsStaffEdit: boolean = false;
  staffs: Staff[] = [];
  staff: Staff = null;
  id: Number = 0;

  constructor(private staffService: StaffService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.staffService.GetAll().subscribe(data => {
      this.staffs = data;
    })
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.id = +params.get('Id');
      this.staffService.Get(this.id).subscribe(data => {
        this.staff = data;
      })

      if (this.id != 0) {
        this.IsStaffEdit = true;
        this.EmployeeInfo = new FormGroup({
          employeeName: new FormControl(this.staff.Name),
          salary: new FormControl(this.staff.Salary),
          departmentName: new FormControl(this.staff.DepartmentName)
        });
      } else {
        this.IsStaffEdit = false;
        this.EmployeeInfo = new FormGroup({
          employeeName: new FormControl(),
          salary: new FormControl(),
          departmentName: new FormControl()
        });
      }

    })
  }
  OnSubmit() {
    if (!this.IsStaffEdit) {
      let lastEmployee = this.staffs[this.staffs.length - 1].Id;

      this.staffService.Add(
        new Staff((+lastEmployee + 1),
          this.EmployeeInfo.value.employeeName,
          (+this.EmployeeInfo.value.salary),
          this.EmployeeInfo.value.departmentName));

      this.router.navigate(['/home']);
    }
    else {
      this.staffService.Update(new Staff(this.id,
        this.EmployeeInfo.value.employeeName,
        (+this.EmployeeInfo.value.salary),
        this.EmployeeInfo.value.departmentName));

      // this.router.navigate(['/home']);
    }
  }
  Cancel() {
    this.router.navigate(['/home']);
  }
  canExit(): boolean {
    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }

  }
}
