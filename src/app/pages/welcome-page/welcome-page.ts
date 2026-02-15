import { Component } from '@angular/core';
import { Button } from "../../../components/button/button";
import { Card } from "../../../components/card/card";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
  imports: [Button, Card],
})
export class WelcomePage {
}
