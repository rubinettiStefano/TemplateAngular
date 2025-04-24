import { Component } from '@angular/core';
import {TabellaDraghiComponent} from './components/tabella-mostri/tabella-draghi.component';
import {FormDragoComponent} from './components/form-drago/form-drago.component';
import {Mostro} from './model/mostro';
import {MostroRepositoryService} from './services/ajax/mostro-repository.service';
import {Drago} from './model/drago';
import {DragoRepositoryService} from './services/ajax/drago-repository.service';
import {DettaglioDragoComponent} from './components/dettaglio-drago/dettaglio-drago.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    TabellaDraghiComponent,
    FormDragoComponent,
    DettaglioDragoComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
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

  mostraDrago(posizione: number)
  {

    this.dragoSelezionato = this.draghiInApp[posizione];
  }

  pagineDaMostrare:any = {tabella:true,form:false,dettaglio:false};

  mostraPagina(nome:string)
  {
    //FOR OF -> for each
    //FOR IN -> scorrimento delle chiavi di una mappa
    //in java, con una mappa dove le chiavi sono String
    //Map<String,Boolean> pagineDaMostrare = new HashMap<>();
    //pagineDaMostrare.put("tabella",true);
    //pagineDaMostrare.put("form",false);
    //pagineDaMostrare.put("dettaglio",false);
    // for(String key : pagineDaMostrare.keySet()) keySet() è l'insieme solo delle key
    //    pagineDaMostrare.put(key,false);
    //ciclo dove chiave vale:
    //1 -> tabella
    //2 -> form
    //3 -> dettaglio
    for(let chiave in this.pagineDaMostrare)
    {
      if(chiave==nome)
        this.pagineDaMostrare[chiave]=true;
      else
        this.pagineDaMostrare[chiave]=false;

      // this.pagineDaMostrare[chiave]=chiave==nome;
    }

  }
}
