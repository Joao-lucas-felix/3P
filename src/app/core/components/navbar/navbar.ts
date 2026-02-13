import { Component, signal, WritableSignal} from '@angular/core';
import { Link } from '../../interfaces/links'
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen: WritableSignal<boolean> = signal(false)

  linksNav = signal<Link[]>([
    {route: "#", routeName: "Conceitos"},
    {route: "#", routeName: "Exercícios"},
    {route: "#", routeName: "Sobre"},
  ])
  menuToggle() {
    this.menuOpen.update(v => !v)
  }
}
