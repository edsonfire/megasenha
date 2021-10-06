import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Equipe } from 'src/app/models/equipe.model';


@Component({
  selector: 'app-equipe-formulario',
  templateUrl: './equipe-formulario.component.html',
  styleUrls: ['./equipe-formulario.component.css']
})
export class EquipeFormularioComponent implements OnInit {

  equipe = new Equipe();
  formEquipe = this.createForm();

  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formEquipe.value);
  }

  createForm():FormGroup {
    return new FormGroup({
      descricao: new FormControl(this.equipe.descricao,  [
        Validators.required,
        Validators.minLength(8),

      ]),
      lider: new FormControl(this.equipe.lider),
      lider2: new FormControl(this.equipe.lider_2),
      lider3: new FormControl(this.equipe.lider_3),
      secretario: new FormControl(this.equipe.secretario)
   
    })
  }
  get descricao() { return this.formEquipe.get('descricao')!; }



}
