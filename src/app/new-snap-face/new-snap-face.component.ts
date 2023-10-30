import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { SnapFace } from '../models/snap-face.model';
import { SnapFaceService } from '../services/snap-face.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-snap-face',
  templateUrl: './new-snap-face.component.html',
  styleUrls: ['./new-snap-face.component.scss'],
})
export class NewSnapFaceComponent implements OnInit {
  snapForm!: FormGroup;
  snapFacePreview$!: Observable<SnapFace>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private snapFaceService: SnapFaceService,
              private router: Router) {}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      titre:        [null, Validators.required],
      description:  [null, Validators.required],
      imageUrl:     [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location:     [null]
    }, {
      updateOn:'blur'
    });

    this.snapFacePreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        date: new Date(),
        like: 0,
        id: 0
      }))
    );

  }


  onSubmitForm(): void {
    this.snapFaceService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/snapFaces'))
    ).subscribe();
  }
}
