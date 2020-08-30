import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, HttpService]
})
export class SharedModule {}
