import { Component, Input, OnInit } from '@angular/core';
import { SnapFace } from '../models/snap-face.model';
import { SnapFaceService } from '../services/snap-face.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-snapface',
  templateUrl: './single-snapface.component.html',
  styleUrls: ['./single-snapface.component.scss'],
})
export class SingleSnapfaceComponent implements OnInit {
  /// @Input() snapface!: SnapFace;
  snapFace$!: Observable<SnapFace>

  haveLiked!: boolean;
  titreLike!: string;

  constructor(
    private snapFaceServices: SnapFaceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.haveLiked = false;
    this.titreLike = 'Like';

    //Ajout du + = Integer.parseInt
    const snapFaceId = +this.route.snapshot.params['id'];
    this.snapFace$ = this.snapFaceServices.getSnapFaceById(snapFaceId);
  }

  onLike(snapFaceId: number): void {
    
    if (this.haveLiked == false) {
      this.snapFace$ = this.snapFaceServices.snapSnapFaceById(snapFaceId, this.haveLiked).pipe(
        tap(() => {
          this.haveLiked = true;
          this.titreLike = 'Dislike';
        })
      )
    } else {
      this.snapFace$ = this.snapFaceServices.snapSnapFaceById(snapFaceId, this.haveLiked).pipe(
        tap(() => {
          this.haveLiked = false;
          this.titreLike = 'Like';
        })
      )
    }
    
  }
}
