import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './Views/Departments/department-list/department-list.component';
import { DepartmentFormComponent } from './Views/Departments/department-form/department-form.component';
import { StaffListComponent } from './Views/Staffs/staff-list/staff-list.component';
import { StaffFormComponent } from './Views/Staffs/staff-form/staff-form.component';
import { StudentListComponent } from './Views/Students/student-list/student-list.component';
import { StudentFormComponent } from './Views/Students/student-form/student-form.component';
import { NavComponent } from './Views/Shared/nav/nav.component';
import { HomeComponent } from './Views/Shared/home/home.component';
import { DepartmentListResolverService } from './Services/Gaurds/Resolves/Department/department-list-resolver.service';
import { LoginComponent } from './Views/Login/login/login.component';
import { AuthService } from './Views/Login/Auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentFormComponent,
    StaffListComponent,
    StaffFormComponent,
    StudentListComponent,
    StudentFormComponent,
    NavComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DepartmentListResolverService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
