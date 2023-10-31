import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnapFaceComponent } from './components/snap-face/snap-face.component';
import { SnapFaceListComponent } from './components/snap-face-list/snap-face-list.component';
import { NewSnapFaceComponent } from './components/new-snap-face/new-snap-face.component';
import { SingleSnapfaceComponent } from './components/single-snapface/single-snapface.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SnapFaceComponent,
    SnapFaceListComponent,
    NewSnapFaceComponent,
    SingleSnapfaceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SnapFaceComponent,
    SnapFaceListComponent,
    NewSnapFaceComponent,
    SingleSnapfaceComponent,
  ]
})
export class SnapsFaceModule { }
