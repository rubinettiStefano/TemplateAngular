import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mostro} from '../../model/mostro';

//qualcosa che viene "beanizzato" e che puo essere "autowirato"
@Injectable({
  providedIn: 'root'
})
export class MostroRepositoryService
{
  //inject di field (proprietà)
  // http:HttpClient = inject(HttpClient);

  //per poter mandare request ho bisogno di un oggetto HttpClient,
  //che Angular ci fornisce a tale scopo
  //ciò che noi mettiamo nei parametri del costruttore viene
  //iniettato
  constructor(private http:HttpClient)
  {}

  //metodo che fa una request GET all'endpoint "/api/mostri"
  //del backend, e il json che riceve lo DESERIALIZZA in un Array di Mostro
  getAllMostri():Observable<Mostro[]>
  {
    return this.http.get<Mostro[]>("/api/mostri");
  }
}
