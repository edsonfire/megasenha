import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/models/equipe.model';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipe-component-list',
  templateUrl: './equipe-component-list.component.html',
  styleUrls: ['./equipe-component-list.component.css']
})
export class EquipeComponentListComponent implements OnInit {

equipes?:Equipe[];

  constructor(private service:EquipeService ) { }

  ngOnInit(): void {
    this.retrieveAll();

  }

  
  retrieveAll():void{
    this.service.getAll()
    .subscribe(
        data=>{
          this.equipes=data;
        },
        error=>{
          console.log(error);
        }
        

    );

  }
}
