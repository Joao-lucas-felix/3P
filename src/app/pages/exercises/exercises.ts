import { Component } from '@angular/core';

import { Footer } from '../../core/components/footer/footer';
import { Navbar } from '../../core/components/navbar/navbar';
import { ExerciseSubcategoryCard } from './components/exercise-subcategory/exercise-subcategory';
import { exerciseSubcategories } from './exercises.data';

@Component({
  selector: 'app-exercises',
  imports: [Navbar, Footer, ExerciseSubcategoryCard],
  template: `
    <app-navbar />

    <main class="pb-14 pt-32 md:pt-36">
      <div class="mx-auto flex w-[88%] max-w-6xl flex-col gap-6 md:gap-8">


        <section
          data-testid="exercises-groups"
          class="rounded-[2.2rem] border border-cyan-400/12 bg-slate-950/84 p-6 text-blue-50 shadow-[0_22px_80px_rgba(2,6,23,0.36)] md:p-8"
        >
            <div>
              <p class="font-pixel text-xs uppercase tracking-[0.28em] text-cyan-200/78">
                Prática guiada por trilhas
              </p>

              <h1 class="mt-5">
                <strong
                  class="font-pixel text-2xl font-normal text-cyan-100 text-shadow-md text-shadow-slate-950 md:text-3xl"
                >
                  Exercícios
                </strong>
              </h1>

              <p class="mt-3 text-sm leading-7 text-blue-100/76">
                {{ totalSubcategories }} subcategorias e {{ totalExercises }} exercícios para
                praticar no seu ritmo.
              </p>
            </div>

          <div
            class="mt-6  gap-4 space-y-4   xl:space-y-0"
            data-testid="exercise-subcategory-list"
          >
            @for (subcategory of exerciseSubcategories; track subcategory.slug) {
              <app-exercise-subcategory [subcategory]="subcategory" />
            }
          </div>
        </section>
      </div>
    </main>

    <app-footer />
  `,
})
export class Exercises {
  protected readonly exerciseSubcategories = exerciseSubcategories;
  protected readonly totalSubcategories = exerciseSubcategories.length;
  protected readonly totalExercises = exerciseSubcategories.reduce(
    (currentTotal, subcategory) => currentTotal + subcategory.exercises.length,
    0,
  );
}
