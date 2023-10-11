import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];
  selectedCard: any; // Define selectedCard as a class property
  clickedCards: Card[] = []; // Keep track of clicked cards
  firstClickedCard: Card | null = null;


  ngOnInit() {
    // Define an array of image paths for the cards
    const cardData: any[] = [
      { breed: 'Chow Chow', imagePath: 'https://d1axrjtp4ik438.cloudfront.net/uploads/breed/102/1533230205-chowchow3-png'},
      { breed: 'Basset Hound', imagePath: 'https://www.pngall.com/wp-content/uploads/2016/05/Basset-Hound-Free-Download-PNG.png'},
      { breed: 'Bullterrier', imagePath: 'https://www.dogshog.com/wp-content/uploads/2018/11/Miniature-Bull-Terrier.png'},
      { breed: 'Afghan Hound', imagePath: 'https://www.worldlydogs.com/uploads/5/2/2/3/52234445/6658496_orig.png'},
      { breed: 'Boxer', imagePath: 'https://www.furlifevet.com.au/wp-content/uploads/2018/09/boxer_transparent.png'},
      { breed: 'Shepherd', imagePath: 'https://purepng.com/public/uploads/medium/91506491147rxb5tonv7zxxwpjc7rdhor3obfummzs9thtoo0znckrms7evhd8x0pfx6gsr99kfii4nlph2sbh7ehalhwpsxolu9hfvyajnypik.png'},
      { breed: 'Leonberger', imagePath: 'https://images.wagwalkingweb.com/media/breed/leonberger/appearance/leonberger.png'},
      { breed: 'Dachshund', imagePath: 'https://pngimg.com/uploads/dachshund/dachshund_PNG3.png'},
      { breed: 'French Bulldog', imagePath: 'https://www.pngall.com/wp-content/uploads/4/French-Bulldog-PNG-Picture.png'},
      { breed: 'English Bulldog', imagePath: 'https://th.bing.com/th/id/R.890ff2a46b4e160a81346ee8982eb9c9?rik=3ox50Z47wy5nxA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fbulldog-transparent-background%2fbulldog-transparent-background-4.png&ehk=qu1H7%2fXdFT85Eng7UCzgqhiGAIACAMOtaTQ9gP0W6D8%3d&risl=&pid=ImgRaw&r=0'},
      { breed: 'Schnauzer', imagePath: 'https://i.pinimg.com/originals/f8/31/fb/f831fb94d2bbe52ebaabf808da3e1828.png'},
      { breed: 'Irish Wolfhound', imagePath: 'https://assets.wagwalkingweb.com/media/breed/irish-wolfhound/appearance/irish-wolfhound.png'},
      { breed: 'Chihuahua', imagePath: 'https://th.bing.com/th/id/R.27c3d1285d34f6b5a4c5155e0e2ae0c9?rik=yYtBMmMOGaklQA&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f580b57fbd9996e24bc43bbcd.png&ehk=ReX8IT3pBAHaDsG%2bJTjKyDTqpgG%2b2qay5nK1%2b1P20As%3d&risl=&pid=ImgRaw&r=0'},
      { breed: 'Golden Retriever', imagePath: 'https://www.pngall.com/wp-content/uploads/4/Golden-Retriever-Dog.png'},
      { breed: 'Italian Greyhound', imagePath: 'https://www.dognomics.com/wp-content/uploads/2022/06/B74.png'},
      { breed: 'Greyhound', imagePath: 'https://www.pngmart.com/files/22/Greyhound-PNG-Photos.png'},
  
    ];
        // Duplicate the card data to create pairs
        const cardPairs: Card[] = cardData.reduce((result, card, index) => {

          const card1 = {...card, id: index * 2 };
          const card2 = {...card, id: index * 2 + 1 };
          return result.concat(card1, card2);
        }, []);


        this.cards = this.shuffleCards(cardPairs);
      }

      shuffleCards(cards: Card[]): Card[] {
        for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
      }
      
      selectCard(card: Card) {
        if (!card.isMatched) {
          // If the card is not matched
          if (!card.flipped && !this.selectedCard) {
            // If the card is not flipped, flip it
            card.flipped = true;
            this.selectedCard = card;
          } else if (this.selectedCard !== card) {
            // If two cards are open
            if (this.selectedCard.id === card.id) {
              // If the unique identifiers match, they are a pair
              this.selectedCard.isMatched = true;
              card.isMatched = true;
            } else {
              // If they don't match, flip them back
              setTimeout(() => {
                this.selectedCard.flipped = false;
                card.flipped = false;
              }, 1000);
            }
            // Reset the selected card
            this.selectedCard = null;
          }
        }
      }
      
    
  
      // Define an array to keep track of the selected cards
    selectedCards: Card[] = [];

    onCardClicked(card: Card) {
      if (!this.firstClickedCard) {
        // If there is no first clicked card, set it and flip the card
        this.firstClickedCard = card;
        card.flipped = true;
      } else if (this.firstClickedCard === card) {
        // If the clicked card is the same as the first clicked card, toggle the flip state
        card.flipped = !card.flipped;
      } else {
        // If there is a first clicked card and the clicked card is different, perform matching logic
        if (this.firstClickedCard.imagePath === card.imagePath) {
          // Cards match, update any game logic (e.g., increase score)
          this.firstClickedCard.isMatched = true;
          card.isMatched = true;
          this.firstClickedCard = null; // Reset the firstClickedCard for the next pair of cards
        } else {
          // Cards don't match, flip them back after a delay
          const firstClickedCard = this.firstClickedCard; // Store the firstClickedCard in a local variable
          setTimeout(() => {
            firstClickedCard.flipped = false;
            card.flipped = false;
            this.firstClickedCard = null; // Reset the firstClickedCard for the next pair of cards
          }, 1000); // Adjust the delay time as needed
        }
      }
    }
    
    



  /*
  if (!clickedCard.isMatched) {
    clickedCard.flipped = true;
  }

    // Add the clicked card to the selectedCards array
    this.selectedCards.push(clickedCard);

    if (this.selectedCards.length === 2) {
      const firstClickedCard = this.selectedCards[0];
      const secondClickedCard = this.selectedCards[1];

      if (firstClickedCard.imagePath === secondClickedCard.imagePath) {
        // Cards match, update any game logic (e.g., increase score)
        firstClickedCard.isMatched = true;
        secondClickedCard.isMatched = true;

        // Reset the selectedCards array for the next pair of cards
        this.selectedCards = [];
      } else {
        // Cards don't match, flip them back after a delay (you can implement a delay using setTimeout)
        setTimeout(() => {
          firstClickedCard.flipped = false;
          secondClickedCard.flipped = false;

          // Reset the selectedCards array for the next pair of cards
          this.selectedCards = [];
        }, 1000); // Adjust the delay time as needed
      }
    }
  }
  */

}