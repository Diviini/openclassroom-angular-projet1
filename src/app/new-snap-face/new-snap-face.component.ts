import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { SnapFace } from '../models/snap-face.model';

@Component({
  selector: 'app-new-snap-face',
  templateUrl: './new-snap-face.component.html',
  styleUrls: ['./new-snap-face.component.scss'],
})

export class NewSnapFaceComponent implements OnInit {
  snapForm!: FormGroup;
  snapFacePreview$!: Observable<SnapFace>

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title:        [null],
      description:  [null],
      imageUrl:     [null],
      location:     [null]
    })

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
    console.log(this.snapForm.value);
  }
}
