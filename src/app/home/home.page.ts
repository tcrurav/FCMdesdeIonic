import { Component } from '@angular/core';
import { FirebasetokenService } from '../firebasetoken.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  token: string = "";

  constructor(public firebaseToken: FirebasetokenService){}

  ionViewDidLoad(){
    this.refreshToken();
  }

  refreshToken(){
    this.token = this.firebaseToken.getToken();
  }
}
