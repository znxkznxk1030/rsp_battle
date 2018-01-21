import { Component, OnInit } from '@angular/core';
import {  } from '@angular/animations';

import { Card } from '../shared/card';
import { Player } from '../shared/player';

import { CardService } from '../services/card.service';
import { BattleService } from '../services/battle.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  animations: [

  ]
})
export class BattleComponent implements OnInit {

	cards: Card[];
	player: Player;
	oppenent: Player;

  constructor(private cardService: CardService,
  			private battleService: BattleService) { }

  ngOnInit() {
  	this.cards = this.cardService.getCards();
  	this.player = this.battleService.getPlayer();
  	this.oppenent = this.battleService.getOppent();
  }



}
