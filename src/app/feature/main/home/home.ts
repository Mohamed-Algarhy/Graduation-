import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { nav } from '../../../layout/nav/nav';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, nav],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
