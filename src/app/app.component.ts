import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      //Filtre la sortie
      filter((value) => value % 3 === 0),

      //Change les valeurs
      map((value) =>
        value % 2 === 0
          ? `Je suis ${value} et je suis pair`
          : `Je suis ${value} et je suis impair`
      ),

      //Modifie sans changer
      tap((text) => this.logger(text))
    );
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
}
