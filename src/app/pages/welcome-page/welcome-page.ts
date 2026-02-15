import { Component } from '@angular/core';
import { Button } from "../../../components/button/button";
import { Card } from "../../../components/card/card";
import { Tag } from '../../../components/tag/tag';
import { TechnologyTile } from '../../../components/technology-tile/technology-tile';
import { TagColorPipe } from '../../../pipes/tag-color-pipe';

interface TagContent {
  icon?: string;
  text: string;
}
interface Technology {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
  imports: [
    Button,
    Card,
    Tag,
    TagColorPipe,
    TechnologyTile
  ],
})
export class WelcomePage {
  public readonly tags: TagContent[] = [
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

  public readonly technologies: Technology[] = [
    {
      title: 'Frontend',
      description: 'Angular, TypeScript, Material UI, Responsive Design',
      icon: 'ph-laptop'
    },
    {
      title: 'Backend',
      description: 'Node.js, TypeScript, Java',
      icon: 'ph-terminal',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Docker, Kubernetes, Azure Pipelines',
      icon: 'ph-cloud'
    }
  ]
}
