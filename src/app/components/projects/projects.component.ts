import { Component } from '@angular/core';
import {NgClass, NgForOf, ViewportScroller} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

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

  protected projects: {name: string, description: string, technologies: string[], icon: string, link: string | null}[]  = [
    {
      name: 'Dating App',
      description: 'Main Features: User Registration and Authentication; Filtering - by age, gender, last active, registration date; Realtime messaging - SignalR; User\'s Likes; API - pagination, identity, Repository pattern and Unit of Work',
      technologies: ['Angular', 'TypeScript', 'ASP.Net Core', 'EF Core' , 'HTML', 'CSS'],
      icon: 'fa fa-project-diagram icon',
      link: 'https://github.com/venellinus1/DatingApp_Angular_Net8',
    },
    {
      name: 'Portfolio website',
      description: 'Personal website showcasing technologies, sample projects, etc',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      icon: 'fa fa-building-columns icon',
      link: 'https://github.com/venellinus1/vv-portfolio',
    },
    
  ];
}