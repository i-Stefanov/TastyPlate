import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(
    email: string,
    username: string,
    password: string,
    avatarUrl: string
  ) {
    const url = `${this.apiUrl}/users/register`;
    console.log(
      'token',
      this.http.post(url, { email, password, username, avatarUrl })
    );
    return this.http.post(url, { email, password, username, avatarUrl });
  }

  login(email: string, password: string) {
    const url = `${this.apiUrl}/users/login`;
    console.log('token', this.http.post(url, { email, password }));
    return this.http.post(url, { email, password });
  }
}
