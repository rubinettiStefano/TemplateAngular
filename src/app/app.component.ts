import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MostroRepositoryService} from './services/ajax/mostro-repository.service';
import {Mostro} from './model/mostro';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  mostri:Mostro[] = [];

  constructor(private mostroRepo:MostroRepositoryService)
  {
    //                        contiene una callback che prende la response
    //                        e la usa per riempire l'array di Mostro chiamato mostri
    //                        la callback viene richiamata in automatico quando arriva la response
    mostroRepo.getAllMostri().subscribe(resp=>this.mostri=resp);
  }

}
