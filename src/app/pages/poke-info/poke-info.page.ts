import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ApiService } from '../../../../service/api.service';


@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.page.html',
  styleUrls: ['./poke-info.page.scss'],
})
export class PokeInfoPage implements OnInit {

  public nome: any;
  public item: any;
  public n: any;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private api: ApiService) { 
    this.nome = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.lista_poke();
    
  }

  ngOnInit() {
  }

  lista_poke() {
    this.api.lista_poke(this.nome).subscribe((e) => {
      this.item = (e);
      //console.log(e);
      console.log(this.item);
    }, err => {
      console.log(err);
    })
  }

}
