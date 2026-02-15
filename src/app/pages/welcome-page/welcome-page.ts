import { Component } from '@angular/core';
import { Button } from "../../../components/button/button";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
  imports: [Button],

})
export class WelcomePage {
}
