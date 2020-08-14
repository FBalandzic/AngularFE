import { Component, OnInit } from '@angular/core';
import { OglasService } from '../../services/oglas.service';
import { ActivatedRoute } from '@angular/router';
import { Oglas } from '../../model/oglas';

@Component({
  selector: 'app-oglas-details',
  templateUrl: './oglas-details.component.html',
  styleUrls: ['./oglas-details.component.css']
})
export class OglasDetailsComponent implements OnInit {

  public oglas: Oglas;
  constructor(private oglasService: OglasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const oglasCode = this.route.snapshot.paramMap.get('code');
    this.oglasService.getJedanOglas(oglasCode).subscribe(oglas => this.oglas = oglas);
  }

}
