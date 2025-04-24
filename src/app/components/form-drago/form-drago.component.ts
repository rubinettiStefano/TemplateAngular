import {Component, EventEmitter, Output} from '@angular/core';
import {Drago} from '../../model/drago';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {DragoRepositoryService} from '../../services/ajax/drago-repository.service';
import {StatoGlobaleService} from '../../services/stato/stato-globale.service';
import {Router} from '@angular/router';

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
  constructor(private repository:DragoRepositoryService,private stato:StatoGlobaleService,private router:Router) {
  }

  possibiliElementi:string[] = ['ACQUA','FUOCO','VENTO','TERRA'];
  possibiliPericolosita:string[] = ['BASSA','MEDIA','ALTA','SVILUPPATORE_SPRING'];

  dragoDaInserire:Drago = {pericolosita:"",nome:'',ubicazione:"",elemento:``,volante:false}


  salva()
  {
    this.repository.insert(this.dragoDaInserire).subscribe
    (
      ()=>{
        alert("Drago inserito");
        this.stato.ricaricaArray();
        this.router.navigate(['/tabella']);
      });
  }
}
