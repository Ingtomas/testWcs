import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesComponent } from './pages/houses/houses.component';
import { NewStudentsComponent } from './pages/new-students/new-students.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StudentsComponent } from './pages/students/students.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HousesComponent,
    StudentsComponent,
    StaffComponent,
    TableComponent,
    NewStudentsComponent,
  ],
  imports: [CommonModule, SharedModule,],
})
export class ConsultasModule {}
