import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Equipe } from 'src/app/models/equipe.model';


@Component({
  selector: 'app-equipe-formulario',
  templateUrl: './equipe-formulario.component.html',
  styleUrls: ['./equipe-formulario.component.css']
})
export class EquipeFormularioComponent implements OnInit {

  formEquipe?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Equipe());
  }


  createForm(equipe: Equipe) {
    this.formEquipe = new FormGroup({
      descricao: new FormControl(equipe.descricao),
      lider: new FormControl(equipe.lider),
      lider2: new FormControl(equipe.lider_2),
      lider3: new FormControl(equipe.lider_3),
      secretario: new FormControl(equipe.secretario)
   
    })
  }




}
