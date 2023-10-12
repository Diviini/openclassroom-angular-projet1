import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-snap-face',
  templateUrl: './new-snap-face.component.html',
  styleUrls: ['./new-snap-face.component.scss']
})
export class NewSnapFaceComponent implements OnInit {
  
  snapForm!: FormGroup;

  constructor(private formBuilder: FormBuilder)  {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
