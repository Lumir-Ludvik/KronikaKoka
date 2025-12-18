import { Component } from '@angular/core';
import {Header} from '../../components/shared/header/header';

@Component({
  selector: 'app-home',
  imports: [
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

}
