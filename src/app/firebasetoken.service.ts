import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebasetokenService {
  private token: string = "";

  constructor() { }

  setToken(token: string){
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
