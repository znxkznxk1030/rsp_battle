import { Injectable } from '@angular/core';
import { Card } from '../shared/card';
import { CARDS } from '../shared/cards';

@Injectable()
export class CardService {

  constructor() { }

  getCards() : Card[] {
  	return CARDS;
  }

  
}
