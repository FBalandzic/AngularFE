import { Injectable } from '@angular/core';
import { Oglas } from '../model/oglas';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { UserStoreService } from './user-store.service';


@Injectable()
export class OglasService {
// , private userStore: UserStoreService
  constructor(private http: HttpClient) {}

  getOglas() : Observable<Oglas[]> {
    return this.http.get<Oglas[]>('/api/oglas');
  }

  getJedanOglas(code: string): Observable<Oglas> {
    return this.http.get<Oglas>('/api/oglas/' + code);
  }

  createOglas(oglas: Oglas): Observable<any> {
    return this.http.post('/api/oglas', oglas);
  }

  toggleOmiljene(oglas: Oglas): Observable<Oglas> {
    return this.http.patch<Oglas>('/api/oglas/' + oglas.code,
      {
        omiljen: !oglas.omiljen
      });
  }
}
