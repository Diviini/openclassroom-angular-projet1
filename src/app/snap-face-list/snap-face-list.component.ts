import { Component, OnDestroy, OnInit } from '@angular/core';
import { SnapFace } from '../models/snap-face.model';
import { SnapFaceService } from '../services/snap-face.service';
import { Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss'],
})
export class SnapFaceListComponent implements OnInit, OnDestroy {
  snapFaces!: SnapFace[];
  private destroy$!: Subject<boolean>;

  //Injection du service dans le constructeur
  //Ajout du type = Injection de l'instance
  constructor(private snapFaceService: SnapFaceService) {}

  ngOnInit(): void {
    this.snapFaces = this.snapFaceService.getAllSnapFace();
    this.destroy$ = new Subject<boolean>();
    interval(1000)
      .pipe(tap(console.log), takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
