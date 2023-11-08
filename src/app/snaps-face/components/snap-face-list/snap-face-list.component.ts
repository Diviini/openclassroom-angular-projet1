import { Component, OnDestroy, OnInit } from '@angular/core';
import { SnapFace } from '../../../core/models/snap-face.model';
import { SnapFaceService } from '../../../core/services/snap-face.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss'],
})
export class SnapFaceListComponent implements OnInit {
  snapFaces!: SnapFace[];
  snapFaces$!: Observable<SnapFace[]>;


  //Injection du service dans le constructeur
  //Ajout du type = Injection de l'instance
  constructor(private snapFaceService: SnapFaceService) {}

  ngOnInit(): void {
    
    this.snapFaces$ = this.snapFaceService.getAllSnapFace();
    //this.snapFaces = this.snapFaceService.getAllSnapFace();

  }

}
