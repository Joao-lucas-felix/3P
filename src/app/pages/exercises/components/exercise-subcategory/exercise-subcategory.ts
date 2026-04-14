import { Component, computed, input, signal } from '@angular/core';

import { ExerciseSubcategory as ExerciseSubcategoryData } from '../../exercises.data';

@Component({
  selector: 'app-exercise-subcategory',
  imports: [],
  template: `
    <article
      class="cursor-pointer rounded-3xl border border-blue-200/10 bg-slate-900/40 p-6 transition hover:border-blue-200/20 hover:bg-slate-900/55"
      data-testid="exercise-subcategory"
      role="button"
      tabindex="0"
      [attr.aria-expanded]="isExpanded()"
      (click)="toggleExpanded()"
      (keydown.enter)="toggleExpanded()"
      (keydown.space)="toggleExpanded(); $event.preventDefault()"
    >
      <div class="flex items-center justify-between gap-4">
        <div>
          <h3 class="font-pixel text-lg text-blue-100">
            {{ subcategory().title }}
          </h3>

          <p class="mt-2 text-sm text-blue-100/80">
            {{ subcategory().description }}
          </p>

          <p class="mt-2 text-xs uppercase tracking-wide text-cyan-200/80">
            {{ exerciseCountLabel() }}
          </p>
        </div>

        <span class="text-sm text-cyan-200/90">
          {{ isExpanded() ? 'Fechar exercícios' : 'Abrir exercícios' }}
        </span>
      </div>

      @if (isExpanded()) {
        <div class="mt-5 border-t border-blue-200/10 pt-4" (click)="$event.stopPropagation()">
          <ul class="space-y-4">
            @for (exercise of subcategory().exercises; track exercise.href) {
              <li class="rounded-2xl border border-blue-200/10 bg-slate-950/30 p-4">
                <h4 class="font-semibold text-blue-50">{{ exercise.title }}</h4>

                <p class="mt-2 text-blue-100/80">
                  {{ exercise.summary }}
                </p>

                <a
                  class="mt-3 inline-flex text-sm text-cyan-200 underline underline-offset-4"
                  [href]="exercise.href"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver exercício no repositório
                </a>
              </li>
            }
          </ul>
        </div>
      }
    </article>
  `,
})
export class ExerciseSubcategoryCard {
  readonly subcategory = input.required<ExerciseSubcategoryData>();

  protected readonly isExpanded = signal(false);
  protected readonly exerciseCountLabel = computed(() => {
    const totalExercises = this.subcategory().exercises.length;

    return totalExercises === 1 ? '1 exercício' : `${totalExercises} exercícios`;
  });

  protected toggleExpanded(): void {
    this.isExpanded.update((currentValue) => !currentValue);
  }
}
