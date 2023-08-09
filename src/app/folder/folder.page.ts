import { ApiService } from './../../../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  
  public atualizacao: number = 0; 
  public api2: any;
  public nome: any ="";

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.listar();
  }

  listar() {
    this.api.listar(this.nome).subscribe((e) => {
      this.api2 = e;
      console.log(e);
    }, err => {
      console.log(err);
    })
  }

  atualizar() {
    this.atualizacao++;
    this.listar();
  }

}
