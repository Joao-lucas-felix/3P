import { Component, input } from '@angular/core';

import { Footer } from '../../../../core/components/footer/footer';
import { Navbar } from '../../../../core/components/navbar/navbar';
import { ConceptPageContent } from '../../concept-pages.data';
import { ConceptNavigation } from '../concept-navigation/concept-navigation';

@Component({
  selector: 'app-concept-detail-page',
  imports: [Navbar, Footer, ConceptNavigation],
  template: `
    <app-navbar />

    <main>
      <div class="md:w-[60%] w-[80%] mt-32 flex mx-auto flex-col gap-y-10">
        <app-concept-navigation [currentSlug]="concept().slug" />

        <section
          class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
        >
          <a
            href="#/concepts"
            class="inline-block text-sm text-blue-100/80 hover:text-blue-100 underline underline-offset-4 transition"
          >
            Voltar para a trilha de conceitos
          </a>

          <h1 class="mt-4">
            <strong
              class="font-pixel font-normal text-blue-200 text-2xl text-shadow-md text-shadow-blue-950"
            >
              {{ concept().title }}
            </strong>
          </h1>

          <p class="mt-2">
            {{ concept().pageIntro }}
          </p>

          <p class="mt-2">
            {{ concept().pagePlaceholder }}
          </p>
        </section>

        <section
          class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
        >
          <h2>
            <strong
              class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
            >
              Prática guiada
            </strong>
          </h2>

          <p class="mt-2 text-blue-100/80">
            No repositório de exercícios você encontra problemas e resoluções relacionados a este
            conceito para avançar para a prática.
          </p>

          <a
            class="inline-block mt-3 text-blue-200 hover:text-blue-100 underline underline-offset-4 transition"
            [href]="concept().practiceHref"
            target="_blank"
            rel="noreferrer"
          >
            Ver exercícios e resoluções
          </a>
        </section>

        <ng-content />
      </div>
    </main>

    <app-footer />
  `,
})
export class ConceptDetailPage {
  readonly concept = input.required<ConceptPageContent>();
}
