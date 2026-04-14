import { Component } from '@angular/core';
import { footerNavigationLinks } from '../../interfaces/links';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly links = footerNavigationLinks;
}
