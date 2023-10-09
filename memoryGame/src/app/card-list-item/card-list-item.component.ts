import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.css']
})
export class CardListItemComponent {
  @Input() card: any;

  flipCard() {
    this.card.flipped = !this.card.flipped;
  }
}
