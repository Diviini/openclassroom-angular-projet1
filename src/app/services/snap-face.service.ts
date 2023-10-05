//Import de Injectable pour déclarer en tant que service
import { Injectable } from "@angular/core";
import { SnapFace } from "../models/snap-face.model";

//Service enregistré a la racine de l'appli, donc 1 instance
@Injectable({
    providedIn: 'root'
})

export class SnapFaceService  {
    snapFaces: SnapFace[] = [
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
        }
    ];
}