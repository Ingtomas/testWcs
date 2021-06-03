import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
