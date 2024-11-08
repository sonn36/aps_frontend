import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8081"

  constructor(private httpClient: HttpClient) { }

  login(fingerID : string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/users/" + fingerID, null).pipe(
      tap((value) => {
        sessionStorage.setItem("username", value.name)
      })
    )
  }

  register(name: string, email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/users", { name, email, 1: Number, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("id", value.id)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
}
