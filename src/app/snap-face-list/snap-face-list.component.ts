import { Component, OnInit } from '@angular/core';
import { SnapFace } from '../models/snap-face.model';
import { SnapFaceService } from '../services/snap-face.service';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit {
  
  snapFaces!: SnapFace[];

  //Injection du service dans le constructeur
  //Ajout du type = Injection de l'instance
  constructor(private snapFaceService: SnapFaceService) {}

  ngOnInit(): void {
    this.snapFaces = this.snapFaceService.getAllSnapFace();
  }

}
