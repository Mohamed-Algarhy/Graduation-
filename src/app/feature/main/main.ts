import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { nav } from '../../layout/nav/nav';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet,nav],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  
}
