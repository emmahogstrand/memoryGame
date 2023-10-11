import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.css']
})
export class CardListItemComponent {
  @Input() card!: Card;
  @Output() cardClicked: EventEmitter<Card> = new EventEmitter<Card>();

  selectCard() {
    if (!this.card.isMatched && !this.card.flipped) {
      this.cardClicked.emit(this.card); // Emit the clicked card to the parent component
    }
  }

}
