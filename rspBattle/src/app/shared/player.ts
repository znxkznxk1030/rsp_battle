import { Card } from './card';

export class Player {
	_id: string;
	selectedCards: Card[];

	constructor(id){
		this._id = id;
		this.selectedCards = [];
	}

	getNumberOfCard() { 
		return this.selectedCards.length;
	}

	reset(){
		this.selectedCards = [];
	}

	canSelectPlayerCard() {
  		return this.selectedCards.length < 2;
 	}

 	selectCard(card: Card) { 
 		if (this.canSelectPlayerCard())
 			this.selectedCards.push(card);
 	}
}