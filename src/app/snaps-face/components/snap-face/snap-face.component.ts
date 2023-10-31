import { Component, OnInit, Input } from '@angular/core';
import { SnapFace } from '../../../core/models/snap-face.model';
import { SnapFaceService } from '../../../core/services/snap-face.service';
import { Router } from '@angular/router';

// Quand il y a un @ c'est un "décorateur", cela apporte des modifications à une classe
@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html', 
  styleUrls: ['./snap-face.component.scss']
})

// Création de la classe
export class SnapFaceComponent implements OnInit {
  // Permet d'importer une propriété venant de l'extérieur
  @Input() snapface!: SnapFace

  // Déclaration des variables
  /* N'est plus utile depuis la création du models 
  titre!: string;
  description!: string;
  date!: Date;
  like!: number;
  imageUrl!: string;
  */
  haveLiked!: boolean;
  titreLike!: string;

  constructor(private snapFaceServices: SnapFaceService ,
              private router: Router ) {}

  /* La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. 
  Elle permet notamment d'initialiser des propriétés. */
  ngOnInit(): void {
    /*  N'est plus utile depuis la création du models snapface
      this.titre = "Mon Titre";
      this.description = "Voici une belle description !";
      this.date = new Date();
      this.like = 5;
      this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    */
      this.haveLiked = false;
      this.titreLike = "Like";
  }

  // Le type d'une fonction est facultative
  onLike()/*:void*/ {
    if ( this.haveLiked == false) {
      this.haveLiked = true;
      this.titreLike = "Dislike";
      this.snapFaceServices.snapSnapFaceById(this.snapface.id, this.haveLiked);
      
    } else {
      this.haveLiked = false;
      this.titreLike = "Like";
      this.snapFaceServices.snapSnapFaceById(this.snapface.id, this.haveLiked);
      
    }

  }

  onViewSnapFace() {
    this.router.navigateByUrl(`snapFaces/${this.snapface.id}`);
  }

}
