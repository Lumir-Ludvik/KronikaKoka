import {Component} from '@angular/core';
import {Card} from '../../components/shared/card/card';
import {IlluminatedInitial} from '../../directives/illuminated-initial';

@Component({
  selector: 'app-chronicle',
  imports: [
    Card,
    IlluminatedInitial
  ],
  templateUrl: './chronicle.html',
  styleUrl: './chronicle.css',
})
export class Chronicle {

}
