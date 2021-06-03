import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './consultas/pages/houses/houses.component';
import { NewStudentsComponent } from './consultas/pages/new-students/new-students.component';
import { StaffComponent } from './consultas/pages/staff/staff.component';
import { StudentsComponent } from './consultas/pages/students/students.component';

const routes: Routes = [
  { path: '', component: HousesComponent, pathMatch: 'full' },
  { path: 'staff', component: StaffComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'new-students', component: NewStudentsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
