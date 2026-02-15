import { Component } from '@angular/core';
import { Button } from "../../../components/button/button";
import { Card } from "../../../components/card/card";
import { Tag } from '../../../components/tag/tag';
import { TagColorPipe } from '../../../pipes/tag-color-pipe';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
  imports: [Button, Card, Tag, TagColorPipe],
})
export class WelcomePage {
  public readonly tags: {icon?: string; text: string}[] = [
    {
      text: 'TypeScript',
    },
    {
      text: 'Node.js',
    },
    {
      text: 'Angular',
      icon: 'ph-angular-logo'
    },
    {
      text: 'React',
      icon: 'ph-atom'
    },
    {
      text: 'Vue',
    },
    {
      text: 'Figma',
      icon: 'ph-figma-logo'
    },
    {
      text: 'Material Design',
    },
    {
      text: 'WebSocket',
    },
    {
      text: 'WebRTC',
      icon: 'ph-webcam'
    },
    {
      text: 'Keycloak | FTL',
    },
    {
      text: 'Docker',
    },
    {
      text: 'Kubernetes',
    },
    {
      text: 'Git',
      icon: 'ph-git-branch'
    },
    {
      text: 'Azure Pipelines',
    }
  ]
}
