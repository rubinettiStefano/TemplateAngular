import { Injectable } from '@angular/core';
import {DragoRepositoryService} from '../ajax/drago-repository.service';
import {Drago} from '../../model/drago';

@Injectable({
  providedIn: 'root'
})
export class StatoGlobaleService
{

  //stato del componente, dati da mostrare
  draghiInApp:Drago[] = [];
  dragoSelezionato:Drago | null = null;

  //angular istanzia la repository e la passa come proprietà al componente
  constructor(private dragoRepo:DragoRepositoryService)
  {
    this.ricaricaArray();
  }

  //quando richiamato refresha l'array con i dati freschi freschi dal backend
  ricaricaArray() {
    this.dragoRepo.getAllMostri()
      .subscribe(arrayDiDraghiLettiDalMetodo=>this.draghiInApp = arrayDiDraghiLettiDalMetodo);
  }
}
