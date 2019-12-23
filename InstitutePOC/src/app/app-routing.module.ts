import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/Shared/home/home.component';
import { DepartmentListResolverService } from './Services/Gaurds/Resolves/Department/department-list-resolver.service';
import { DepartmentFormComponent } from './Views/Departments/department-form/department-form.component';
import { StaffFormComponent } from './Views/Staffs/staff-form/staff-form.component';
import { StudentFormComponent } from './Views/Students/student-form/student-form.component';
import { StaffListResolverService } from './Services/Gaurds/Resolves/Staff/staff-list-resolver.service';
import { StudentListResolverService } from './Services/Gaurds/Resolves/Student/student-list-resolver.service';
import { DepartmentResolverService } from './Services/Gaurds/Resolves/Department/department-resolver.service';
import { LoginComponent } from './Views/Login/login/login.component';
import { UserAuthGaurdService } from './Services/Gaurds/CanActive/User/user-auth-gaurd.service';
import { DeactivateGuardService } from './Services/Gaurds/CanDeactive/deactivate-guard.service';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'home' , component: HomeComponent , canActivate: [UserAuthGaurdService], resolve: {departments:DepartmentListResolverService , staffs: StaffListResolverService,students: StudentListResolverService }},
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'addDepartment' , component: DepartmentFormComponent , resolve: {department: DepartmentResolverService} , canActivate: [UserAuthGaurdService], canDeactivate: [DeactivateGuardService]},
  {path: 'addStaff' , component: StaffFormComponent , canActivate: [UserAuthGaurdService], canDeactivate: [DeactivateGuardService]},
  {path: 'addStudent' , component: StudentFormComponent , canActivate: [UserAuthGaurdService], canDeactivate: [DeactivateGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
