﻿import { Component, signal, WritableSignal} from '@angular/core';
import { Link, mainNavigationLinks } from '../../interfaces/links';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly homeHref = '#/home';
  protected readonly linksNav = signal<Link[]>(mainNavigationLinks);
  menuOpen: WritableSignal<boolean> = signal(false);

  menuToggle() {
    this.menuOpen.update((isOpen) => !isOpen);
  }
}
