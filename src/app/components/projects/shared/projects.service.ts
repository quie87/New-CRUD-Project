import { Injectable } from '@angular/core';

import { AuthService } from 'src/app/shared/auth/auth.service';
import { HttpService } from 'src/app/shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private auth: AuthService, private http: HttpService) {}
}
