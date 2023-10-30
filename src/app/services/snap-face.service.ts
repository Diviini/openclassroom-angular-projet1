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
          id:0,
          titre: "Mon Titre",
          description: "Voici une belle description !", 
          imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", 
          date: new Date(), 
          like: 0
        },
        {
          id:1,
          titre: "2e Titre",
          description: "Voici une simple description !", 
          imageUrl: "https://cdn.pixabay.com/photo/2023/09/07/14/26/cat-8239223_1280.png", 
          date: new Date(), 
          like: 240
        },
        {
          id:2,
          titre: "Mon 3e titre",
          description: "babaji !", 
          imageUrl: "https://cdn.pixabay.com/photo/2023/06/28/10/00/ai-generated-8093991_640.jpg", 
          date: new Date(), 
          like: 0,
          location: "Lille"
        }
    ];

    getAllSnapFace():SnapFace[] {
        return this.snapFaces;
    }

    getSnapFaceById(snapFaceId:number): SnapFace  {
        const snapFace = this.snapFaces.find(snapFace => snapFace.id === snapFaceId)
        if (!snapFace) {
            throw new Error("SnapFace introuvable");
        } else {
            return snapFace;
        }
    }

    snapSnapFaceById( snapFaceId:number, faceSnapType:boolean /* faceSnapStype : 'like' | 'dislike' si j'avais fait avec un string */ ):void {

        const snapFace = this.getSnapFaceById(snapFaceId);
        faceSnapType === true ? snapFace.like++ : snapFace.like--;
    }

    addFaceSnap(formValue: {titre: string, description: string, imageUrl: string, location?: string}):void {
        const faceSnap: SnapFace = {
            ...formValue,
            date: new Date(),
            like: 0,
            id: (this.snapFaces[this.snapFaces.length-1].id + 1)
        };
        this.snapFaces.push(faceSnap);
    }

}