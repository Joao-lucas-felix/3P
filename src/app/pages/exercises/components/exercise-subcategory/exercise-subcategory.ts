import { Component, computed, input, signal } from '@angular/core';

import { ExerciseSubcategory as ExerciseSubcategoryData } from '../../exercises.data';

@Component({
  selector: 'app-exercise-subcategory',
  imports: [],
  template: `
    <article
      class=" mb-5 cursor-pointer rounded-[2rem] border border-cyan-300/12 bg-slate-950/50 p-6 transition hover:border-cyan-300/20 hover:bg-slate-950/62"
      data-testid="exercise-subcategory"
      role="button"
      tabindex="0"
      [attr.aria-expanded]="isExpanded()"
      (click)="toggleExpanded()"
      (keydown.enter)="toggleExpanded()"
      (keydown.space)="toggleExpanded(); $event.preventDefault()"
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="font-pixel text-lg text-cyan-100">
            {{ subcategory().title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-blue-100/80">
            {{ subcategory().description }}
          </p>

          <p
            class="mt-3 inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-cyan-100/82"
          >
            {{ exerciseCountLabel() }}
          </p>
        </div>

        <span
          class="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-2 text-xs uppercase tracking-[0.16em] text-cyan-100/82"
        >
          {{ isExpanded() ? 'Fechar exercícios' : 'Abrir exercícios' }}
        </span>
      </div>

      @if (isExpanded()) {
        <div class="mt-5 border-t border-cyan-300/10 pt-5" (click)="$event.stopPropagation()">
          <ul class="space-y-4">
            @for (exercise of subcategory().exercises; track exercise.href) {
              <li class="rounded-[1.5rem] border border-cyan-300/10 bg-slate-900/55 p-4">
                <h4 class="font-semibold text-blue-50">{{ exercise.title }}</h4>

                <p class="mt-2 text-sm leading-7 text-blue-100/80">
                  {{ exercise.summary }}
                </p>

                <a
                  class="mt-3 inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/18"
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
