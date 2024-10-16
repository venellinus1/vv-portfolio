import { Component } from '@angular/core';
import {NgClass, NgForOf, ViewportScroller} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  openAccordionIndex: number | null = 0;

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  setAccordionIndex(index: number | null) {
    if (this.openAccordionIndex === index) {
      this.openAccordionIndex = null;
    } else {
      this.openAccordionIndex = index;
    }
  }

  protected projects: Project[]  = [
    {
      name: 'Dating App',
      description: 'Main Features: User Registration and Authentication; Filtering - by age, gender, last active, registration date; Realtime messaging - SignalR; User\'s Likes; API - pagination, identity, Repository pattern and Unit of Work',
      technologies: ['Angular', 'TypeScript', 'ASP.Net Core', 'EF Core' , 'HTML', 'CSS'],
      src: './assets/projects/dating-app.png',
      link: 'https://github.com/venellinus1/DatingApp_Angular_Net8',
    },
    {
      name: 'Portfolio website',
      description: 'Personal website showcasing technologies, sample projects, etc',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/venellinus1/vv-portfolio',
    },
    
  ];
}