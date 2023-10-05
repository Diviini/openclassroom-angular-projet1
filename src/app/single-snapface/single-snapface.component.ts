import { Component, Input, OnInit } from '@angular/core';
import { SnapFace } from '../models/snap-face.model';
import { SnapFaceService } from '../services/snap-face.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-snapface',
  templateUrl: './single-snapface.component.html',
  styleUrls: ['./single-snapface.component.scss']
})
export class SingleSnapfaceComponent implements OnInit {

  @Input() snapface!: SnapFace

  haveLiked!: boolean;
  titreLike!: string;

  constructor(private snapFaceServices: SnapFaceService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.haveLiked = false;
    this.titreLike = "Like";

    //Ajout du + = Integer.parseInt
    const snapFaceId = +this.route.snapshot.params['id'];
    this.snapface = this.snapFaceServices.getSnapFaceById(snapFaceId);
  }

  onLike():void {
    if (this.haveLiked == false) {
      this.haveLiked = true;
      this.titreLike = "Dislike";
      this.snapFaceServices.snapSnapFaceById(this.snapface.id, this.haveLiked);

    } else {
      this.haveLiked = false;
      this.titreLike = "Like";
      this.snapFaceServices.snapSnapFaceById(this.snapface.id, this.haveLiked);

    }

  }
}
