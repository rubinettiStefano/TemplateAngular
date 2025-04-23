import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drago} from '../../model/drago';
import {Observable} from 'rxjs';
import {Mostro} from '../../model/mostro';

@Injectable({
  providedIn: 'root'
})
export class DragoRepositoryService {

  constructor(private http:HttpClient) { }

  insert(daInserire:Drago)
  {
    //fa una post verso /api/draghi mandando come payload il json del drago preso come parametro
    return this.http.post("/api/draghi",daInserire);
  }

  getAllMostri():Observable<Drago[]>
  {
    return this.http.get<Drago[]>("/api/draghi");
  }
}
