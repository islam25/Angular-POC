import { Component, OnInit, Input } from '@angular/core';
import { Staff } from 'src/app/Models/Staff';
import { StaffService } from 'src/app/Services/Staff/staff.service';
import { AuthService } from '../../Login/Auth/auth.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  @Input() stafs: Staff[] = [];
  staff: Staff = new Staff(0 , '' , 0 , '');
  idToRemove: Number = 0;
  
  constructor(private staffService: StaffService , private auth: AuthService) { }
  
  ngOnInit() {
  }

  OnShow(staff){
    this.staff = staff;
  }
  SetToRemove(id){
    this.idToRemove = id;
  }
  OnRemove(){
    this.staffService.Delete(this.idToRemove);
  }
}
