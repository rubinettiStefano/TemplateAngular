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
//Questo è il JSON che arriva
  //lui lo deserializza in un array di oggetti Mostro
//   [
//     {
//       "id": 2,
//       "nome": "Smaug",
//       "ubicazione": "Erebor",
//       "pericolosita": "ALTA",
//       "taglie": [],
//       "elemento": "FUOCO",
//       "volante": true,
//       "abbattuto": false
//     },
// {
//   "id": 3,
//   "nome": "Fafnir",
//   "ubicazione": "Niðavellir",
//   "pericolosita": "BASSA",
//   "taglie": [
//     {
//       "id": 1,
//       "ricompensa": 25000.0,
//       "difficolta": 4,
//       "inizio": "2025-04-22",
//       "fine": null,
//       "completata": false
//     }
//   ],
//   "elemento": "TERRA",
//   "volante": false,
//   "abbattuto": false
// },
// {
//   "id": 4,
//   "nome": "Alduin",
//   "ubicazione": "Skyrim",
//   "pericolosita": "ALTA",
//   "taglie": [],
//   "elemento": "FUOCO",
//   "volante": true,
//   "abbattuto": false
// },
// {
//   "id": 8,
//   "nome": "Rhaegal",
//   "ubicazione": "Approdo del Re",
//   "pericolosita": "ALTA",
//   "taglie": [],
//   "elemento": "VENTO",
//   "volante": true,
//   "abbattuto": false
// },
// {
//   "id": 9,
//   "nome": "Firnen",
//   "ubicazione": "Du Weldenvarden",
//   "pericolosita": "BASSA",
//   "taglie": [],
//   "elemento": "TERRA",
//   "volante": true,
//   "abbattuto": false
// },
// {
//   "id": 52,
//   "nome": "Drago Bianco Occhi Blu",
//   "ubicazione": "Deck",
//   "pericolosita": "SVILUPPATORE_SPRING",
//   "taglie": [],
//   "elemento": "VENTO",
//   "volante": true,
//   "abbattuto": false
// }
// ]
}
