import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatDividerModule, MatListModule, MatSliderModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule
  ]
})
export class LoginModule { }
