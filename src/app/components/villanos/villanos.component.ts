import { Component, OnInit } from '@angular/core';
import { VillanosService, Villano } from "../../servicios/villanos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  villanos: Villano[] =[];

  constructor(private _villanosService:VillanosService,
              private _router: Router) { }

  ngOnInit(): void {
    this.villanos=this._villanosService.getVillanos();
  }

  verVillano( idx: number) {
    this._router.navigate(["/villano", idx]);
  }

}
