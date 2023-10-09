import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: any[] = [
    { flipped: false, breed: 'Chow Chow', imagePath: 'https://d1axrjtp4ik438.cloudfront.net/uploads/breed/102/1533230205-chowchow3-png'},
    { flipped: false, breed: 'Basset Hound', imagePath: 'https://www.pngall.com/wp-content/uploads/2016/05/Basset-Hound-Free-Download-PNG.png'},
    { flipped: false, breed: 'Bullterrier', imagePath: 'https://www.dogshog.com/wp-content/uploads/2018/11/Miniature-Bull-Terrier.png'},
    { flipped: false, breed: 'Afghan Hound', imagePath: 'https://www.worldlydogs.com/uploads/5/2/2/3/52234445/6658496_orig.png'},
    { flipped: false, breed: 'Boxer', imagePath: 'https://www.furlifevet.com.au/wp-content/uploads/2018/09/boxer_transparent.png'},
    { flipped: false, breed: 'Shepherd', imagePath: 'https://purepng.com/public/uploads/medium/91506491147rxb5tonv7zxxwpjc7rdhor3obfummzs9thtoo0znckrms7evhd8x0pfx6gsr99kfii4nlph2sbh7ehalhwpsxolu9hfvyajnypik.png'},
    { flipped: false, breed: 'Leonberger', imagePath: 'https://images.wagwalkingweb.com/media/breed/leonberger/appearance/leonberger.png'},
    { flipped: false, breed: 'Dachshund', imagePath: 'https://pngimg.com/uploads/dachshund/dachshund_PNG3.png'},
    { flipped: false, breed: 'French Bulldog', imagePath: 'https://www.pngall.com/wp-content/uploads/4/French-Bulldog-PNG-Picture.png'},
    { flipped: false, breed: 'English Bulldog', imagePath: 'https://th.bing.com/th/id/R.890ff2a46b4e160a81346ee8982eb9c9?rik=3ox50Z47wy5nxA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fbulldog-transparent-background%2fbulldog-transparent-background-4.png&ehk=qu1H7%2fXdFT85Eng7UCzgqhiGAIACAMOtaTQ9gP0W6D8%3d&risl=&pid=ImgRaw&r=0'},
    { flipped: false, breed: 'Schnauzer', imagePath: 'https://i.pinimg.com/originals/f8/31/fb/f831fb94d2bbe52ebaabf808da3e1828.png'},
    { flipped: false, breed: 'Irish Wolfhound', imagePath: 'https://assets.wagwalkingweb.com/media/breed/irish-wolfhound/appearance/irish-wolfhound.png'},
    { flipped: false, breed: 'Chihuahua', imagePath: 'https://th.bing.com/th/id/R.27c3d1285d34f6b5a4c5155e0e2ae0c9?rik=yYtBMmMOGaklQA&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f580b57fbd9996e24bc43bbcd.png&ehk=ReX8IT3pBAHaDsG%2bJTjKyDTqpgG%2b2qay5nK1%2b1P20As%3d&risl=&pid=ImgRaw&r=0'},
    { flipped: false, breed: 'Golden Retriever', imagePath: 'https://www.pngall.com/wp-content/uploads/4/Golden-Retriever-Dog.png'},
    { flipped: false, breed: 'Italian Greyhound', imagePath: 'https://www.dognomics.com/wp-content/uploads/2022/06/B74.png'},
    { flipped: false, breed: 'Greyhound', imagePath: 'https://www.pngmart.com/files/22/Greyhound-PNG-Photos.png'},


  ];

  constructor(){}

  ngOnInit(): void {

  }

}
