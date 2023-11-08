//Import de Injectable pour déclarer en tant que service
import { Injectable } from "@angular/core";
import { SnapFace } from "../models/snap-face.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

//Service enregistré a la racine de l'appli, donc 1 instance
@Injectable({
    providedIn: 'root'
})

export class SnapFaceService  {
    
    constructor(private http: HttpClient) {}
    
    //snapFaces: SnapFace[] = [];


    getAllSnapFace():Observable<SnapFace[]> {
        return this.http.get<SnapFace[]>('http://localhost:3000/facesnaps');
    }

    getSnapFaceById(snapFaceId:number): Observable<SnapFace>  {
        
        return this.http.get<SnapFace>(`http://localhost:3000/facesnaps/${snapFaceId}`)
        
        /*const snapFace = this.snapFaces.find(snapFace => snapFace.id === snapFaceId)
        if (!snapFace) {
            throw new Error("SnapFace introuvable");
        } else {
            return snapFace;
        }*/
    }

    snapSnapFaceById( snapFaceId:number, faceSnapType:boolean /* faceSnapStype : 'like' | 'dislike' si j'avais fait avec un string */ ): Observable<SnapFace> {

        return this.getSnapFaceById(snapFaceId).pipe(
            map(snapFace => ({
                ...snapFace,
                like: snapFace.like + (faceSnapType === false ? 1 : -1)
            })),
            switchMap(updateSnapFace => this.http.put<SnapFace>(`http://localhost:3000/facesnaps/${snapFaceId}`, updateSnapFace))
        )
    }

    addFaceSnap(formValue: {titre: string, description: string, imageUrl: string, location?: string}): Observable<SnapFace> {
        return this.getAllSnapFace().pipe(
            map(snapfaces           => [...snapfaces].sort((a,b) => a.id - b.id)), //Trie du tableau en un nouveau trié
            map(sortedSnapFaces     => sortedSnapFaces[sortedSnapFaces.length-1]), //On récupère le dernier SnapFace
            map(previousSnapFace    => ({                                          // Création au dernier index + 1
                ...formValue,
                like: 0,
                date: new Date(),
                id: previousSnapFace.id + 1
            })),
            switchMap(newSnapFace => this.http.post<SnapFace>('http://localhost:3000/facesnaps', newSnapFace))
        )
    }

}