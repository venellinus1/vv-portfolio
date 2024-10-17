
import { Component} from '@angular/core';
import { NgOptimizedImage} from "@angular/common";


interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "Unity", src: "./assets/technologies/unity3d.png"},
    {name: "PHP", src: "./assets/technologies/php.png"},
    {name: "MySQL", src: "./assets/technologies/mysql.png"},
    {name: "Redis", src: "./assets/technologies/redis.png"},
    {name: "Javascript", src: "./assets/technologies/js.png"},
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "Vue", src: "./assets/technologies/vue.png"},
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    {name: "Bootstrap", src: "./assets/technologies/bootstrap.png"},
    {name: "Docker", src: "./assets/technologies/docker.png"},
    {name: "GIT", src: "./assets/technologies/git.png"},
  ];

  
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}