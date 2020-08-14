import { Component, OnInit } from '@angular/core';
import { OglasService } from 'src/app/services/oglas.service';
import { Oglas } from 'src/app/model/oglas';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
//import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-oglas-list',
  templateUrl: './oglas-list.component.html',
  styleUrls: ['./oglas-list.component.css']
})
export class OglasListComponent implements OnInit {
  // , private userStore: UserStoreService
  public oglasi$: Observable<Oglas[]>;
  constructor(private oglasService: OglasService, private authService: AuthService) { }

  ngOnInit() {
    this.fetchOglas();
  }
  fetchOglas() {
    this.oglasi$ = this.oglasService.getOglas();
  }
  // setAuthToken() {
  //   this.authService.authToken = 'TESTING';
  // }
  // resetAuthToken() {
  //   this.authService.authToken = null;
  // }
}
