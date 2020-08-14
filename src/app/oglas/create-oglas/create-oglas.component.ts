import { Component, OnInit } from '@angular/core';
import { Oglas } from 'src/app/model/oglas';
import { OglasService } from 'src/app/services/oglas.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-oglas',
  templateUrl: './create-oglas.component.html',
  styleUrls: ['./create-oglas.component.css']
})
export class CreateOglasComponent{

  public oglas: Oglas;
  public confirmed = false;
  public message = null;
  constructor(private oglasService: OglasService) {
    this.initializeOglas();
  }

  initializeOglas(){
    this.oglas = {
      ime:"",
      code:"",
      opis:"",
      cena:0,
      omiljen:false
    };
  }

  setOglasCenu(cena) {
    this.oglas.cena = cena;
  }

  createOglas(oglasForm) {
    if (oglasForm.valid) {
      this.oglasService.createOglas(this.oglas)
          .subscribe((result: any) => {
            this.initializeOglas();
          }, (err) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('Oglas nije u validno mstanju');
    }
  }
}
