import { Component, OnInit } from '@angular/core';
import { SnapFace } from '../models/snap-face.model';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit {
  
  snapFaces!: SnapFace[];

  constructor() {}

  ngOnInit(): void {
    this.snapFaces = [
      {
        titre: "Mon Titre",
        description: "Voici une belle description !", 
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", 
        date: new Date(), 
        like: 0
      },
      {
        titre: "2e Titre",
        description: "Voici une simple description !", 
        imageUrl: "https://cdn.pixabay.com/photo/2023/09/07/14/26/cat-8239223_1280.png", 
        date: new Date(), 
        like: 240
      },
      {
        titre: "Mon 3e titre",
        description: "babaji !", 
        imageUrl: "https://cdn.pixabay.com/photo/2023/06/28/10/00/ai-generated-8093991_640.jpg", 
        date: new Date(), 
        like: 0,
        location: "Lille"
      }];
  }

}
