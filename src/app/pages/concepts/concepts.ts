import { Component } from '@angular/core';
import { Footer } from '../../core/components/footer/footer';
import { Navbar } from '../../core/components/navbar/navbar';
import { ConceptNavigation } from './components/concept-navigation/concept-navigation';
import { conceptGroups } from './concept-pages.data';

@Component({
  selector: 'app-concepts',
  imports: [Navbar, Footer, ConceptNavigation],
  templateUrl: './concepts.html',
  styleUrl: './concepts.css',
})
export class Concepts {
  protected readonly conceptGroups = conceptGroups;
}
