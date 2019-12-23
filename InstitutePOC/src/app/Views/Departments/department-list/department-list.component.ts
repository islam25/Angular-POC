import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from 'src/app/Services/Department/department.service';
import { AuthService } from '../../Login/Auth/auth.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  @Input() depts: Department[];
  department: Department= new Department(0 , '');
  codeToRemove: Number = 0;

  constructor(private departmentService: DepartmentService, private auth: AuthService){}

  ngOnInit() {
  }
  
  OnShow(department){
    this.department = department;
  }

  SetToRemove(code){
    this.codeToRemove = code;
  }
  OnRemove(){
    this.departmentService.Delete(this.codeToRemove);
  }
}
