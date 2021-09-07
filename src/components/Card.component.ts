import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'Coin-card',
  templateUrl: "./Card.component.html",
  styleUrls: ['./Card.component.css'],
})

export class Card implements OnInit{

    @Input() moneda:any;
    @Input() namees:string = "agus";
    constructor(){}

    ngOnInit(){
        console.log("aterrice en el planeta tierra", this.moneda)
    }

}