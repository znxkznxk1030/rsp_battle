import { Injectable } from '@angular/core';

import { Player } from '../shared/player';
import { Card } from '../shared/card';

import { CARDS } from '../shared/cards';

@Injectable()
export class BattleService {

	player : Player;
	oppenent : Player;

  constructor() { 
  	this.player = new Player('mock player');
  	this.oppenent = new Player('mock oppenent');
  }

  getPlayer() {
  	return this.player;
  }

  getOppent() {
  	return this.oppenent;
  }

  selectPlayerCard(card: Card) {
  	this.player.selectCard(card);
  }

  drawComputerCard(){
  	for(var i = 0; i < 2; i++) {
  		this.oppenent.selectCard(CARDS[this.getRandomInt(0,3)]);
  	}
  }

  clickDrawingDone(){
  	if(this.player.selectedCards.length == 2)
  		this.drawComputerCard();
  }

  reset() {
  	this.player.reset();
  	this.oppenent.reset();
  }

  getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
  }

}