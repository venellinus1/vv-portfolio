import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import { NavLinksComponent } from "../shared/nav-links/nav-links.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  protected  navItems: string[] = ['About', 'Experience', 'Projects', 'Contacts'];
  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
