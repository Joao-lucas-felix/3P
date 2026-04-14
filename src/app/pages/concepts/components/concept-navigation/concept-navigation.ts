import { Component, computed, input, signal } from '@angular/core';

import { conceptPageList } from '../../concept-pages.data';

@Component({
  selector: 'app-concept-navigation',
  imports: [],
  template: `
    <section
      data-testid="concept-navigation"
      class="bg-slate-900/20 text-blue-100 backdrop-blur-3xl border border-blue-200/20 rounded-3xl p-4 shadow-md shadow-slate-900/70 cursor-pointer  max-w-200 transition hover:bg-slate-900/30 mx-auto"
      (click)="toggleExpanded()"
    >
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="mt-1 font-pixel font-normal text-2xl text-blue-200 text-base text-shadow-md text-shadow-blue-950">
            {{ currentConceptTitle() }}
          </p>
        </div>

        <p class="text-xs text-blue-100/75">{{ isExpanded() ? 'Recolher' : 'Explorar conceitos' }}</p>
      </div>

      @if (isExpanded()) {
        <div class="mt-3 grid gap-2 md:grid-cols-2" (click)="$event.stopPropagation()">
          @for (concept of concepts; track concept.slug) {
            <a
              class="rounded-2xl border px-4 py-3 transition block hover:bg-slate-950/50 hover:border-blue-200/30 text-blue-100/80"
              [class]="getLinkClasses(concept.slug)"
              [attr.aria-current]="concept.slug === currentSlug() ? 'page' : null"
              [href]="'#/concepts/' + concept.slug"
            >
              {{ concept.title }}
            </a>
          }
        </div>
      }
    </section>
  `,
})
export class ConceptNavigation {
  readonly currentSlug = input('');

  protected readonly concepts = conceptPageList;
  protected readonly isExpanded = signal(false);
  protected readonly currentConceptTitle = computed(
    () => this.concepts.find((concept) => concept.slug === this.currentSlug())?.title ?? 'Conceitos',
  );

  protected toggleExpanded(): void {
    this.isExpanded.update((currentValue) => !currentValue);
  }

  protected getLinkClasses(slug: string): string {
    if (slug === this.currentSlug()) {
      return 'rounded-2xl border px-4 py-3 transition block bg-blue-400/20 border-blue-200/30 text-blue-50 shadow-md shadow-blue-950/40';
    }

    return 'rounded-2xl border px-4 py-3 transition block bg-slate-950/30 border-blue-200/10 text-blue-100/80';
  }
}
