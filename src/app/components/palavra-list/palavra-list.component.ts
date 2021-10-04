import { Component, OnInit } from '@angular/core';
import { Palavra } from 'src/app/models/palavra.model';
import { PalavraService } from 'src/app/services/palavra.service';

@Component({
  selector: 'app-palavra-list',
  templateUrl: './palavra-list.component.html',
  styleUrls: ['./palavra-list.component.css']
})
export class PalavraListComponent implements OnInit {


palavras?:Palavra[]; 

  constructor(private service:PalavraService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }



  retrieveAll():void{
    this.service.getAll()
    .subscribe(
        data=>{
          this.palavras=data;
        },
        error=>{
          console.log(error);
        }
        

    );

  }

}
