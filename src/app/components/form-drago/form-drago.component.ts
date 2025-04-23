import {Component, EventEmitter, Output} from '@angular/core';
import {Drago} from '../../model/drago';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {DragoRepositoryService} from '../../services/ajax/drago-repository.service';

@Component({
  selector: 'app-form-drago',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './form-drago.component.html',
  styleUrl: './form-drago.component.css'
})
export class FormDragoComponent
{
  constructor(private repository:DragoRepositoryService) {
  }

  possibiliElementi:string[] = ['ACQUA','FUOCO','VENTO','TERRA'];
  possibiliPericolosita:string[] = ['BASSA','MEDIA','ALTA','SVILUPPATORE_SPRING'];

  dragoDaInserire:Drago = {pericolosita:"",nome:'',ubicazione:"",elemento:``,volante:false}

  @Output()
  dragoCreato:EventEmitter<any> = new EventEmitter<any>();
  //creo un nuovo event emitter, un oggetto che può emettere eventi
  //l' <any> è il payload dell'evento, può contenere informazioni

  salva()
  {
    this.repository.insert(this.dragoDaInserire).subscribe
    (
      ()=>{
        alert("Drago inserito");
        this.dragoCreato.emit();//lancio un evento
      });
  }
}
