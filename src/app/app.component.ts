import { Component, OnInit } from '@angular/core';
import { SnapFace } from './models/snap-face.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  monSnap!:     SnapFace;
  autreSnap!:   SnapFace;
  dernierSnap!: SnapFace;


  ngOnInit(): void {
    this.monSnap = new SnapFace(
      "Mon Titre",
      "Voici une belle description !", 
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", 
      new Date(), 
      0
    );
    this.autreSnap = new SnapFace(
      "2e Titre",
      "Voici une simple description !", 
      "https://cdn.pixabay.com/photo/2023/09/07/14/26/cat-8239223_1280.png", 
      new Date(), 
      2
    );
    this.dernierSnap = new SnapFace(
      "Mon 3e titre",
      "babaji !", 
      "https://cdn.pixabay.com/photo/2023/06/28/10/00/ai-generated-8093991_640.jpg", 
      new Date(), 
      0
    );
  }
}
