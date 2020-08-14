import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Oglas } from 'src/app/model/oglas';
import { OglasService } from 'src/app/services/oglas.service';

@Component({
  selector: 'app-oglas-item',
  templateUrl: './oglas-item.component.html',
  styleUrls: ['./oglas-item.component.css']
})
export class OglasItemComponent{

  @Input() public oglas: Oglas;

  constructor(private oglasService: OglasService) {}

  onToggleOmiljene(event) {
    this.oglasService.toggleOmiljene(this.oglas)
      .subscribe((oglas) => this.oglas.omiljen = !this.oglas.omiljen);
  }

}
