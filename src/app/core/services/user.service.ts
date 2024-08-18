import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  host = environment.hostUrl;

  constructor(private http: HttpClient) {}

  getUsers(request: any) {
    let url = this.host + '/users';

    return this.http.get(url, {
      params: request,
    });
  }
}
