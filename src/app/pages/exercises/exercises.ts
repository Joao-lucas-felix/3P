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

    <main>
      <div class="md:w-[60%] w-[80%] mt-32 flex mx-auto flex-col gap-y-10">
        <section
          class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
        >
          <h1>
            <strong
              class="font-pixel font-normal text-blue-200 text-2xl text-shadow-md text-shadow-blue-950"
            >
              Exercícios
            </strong>
          </h1>

          <p class="mt-2">
            Esta página organiza a prática por subcategorias para ajudar você a encontrar
            exercícios com mais clareza.
          </p>

          <p class="mt-2">
            Nesta etapa, já é possível expandir um grupo por vez para explorar exercícios e
            acessar suas resoluções no repositório.
          </p>

          <p class="mt-2 text-blue-100/80">
            Escolha uma subcategoria, leia o resumo do exercício e use o link para comparar sua
            abordagem com a resolução disponível no repositório.
          </p>
        </section>

        <section
          class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
        >
          <h2>
            <strong
              class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
            >
              Cobertura principal mapeada
            </strong>
          </h2>

          <p class="mt-2 text-blue-100/80">
            Esta cobertura principal já organiza {{ totalSubcategories }} subcategorias reais e
            {{ totalExercises }} exercícios iniciais, mantendo a navegação recolhida para
            preservar leitura simples e controle visual.
          </p>

          <div class="mt-5 space-y-5" data-testid="exercise-subcategory-list">
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
