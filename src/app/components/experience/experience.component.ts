
import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import { ExperienceItemComponent } from './experience-item/experience-item.component';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    ExperienceItemComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  protected backendExperienceItems: {key: string, value: string}[] = [
    {key: "Unity 3D", value: "9/10"},
    {key: "ASP.Net", value: "7/10"},
    {key: "JavaScript", value: "8/10"},
    {key: "MySQL", value: "8/10"},
    {key: "Redis", value: "7/10"},
    {key: "MongoDB", value: "7/10"}
  ];

  protected frontendExperienceItems: {key: string, value: string}[] = [
    {key: "Angular", value: "7/10"},
    {key: "Typescript", value: "8/10"},
    {key: "HTML", value: "8/10"},
    {key: "CSS", value: "7/10"},
    {key: "Bootstrap", value: "7/10"},
  ];

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
