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

    <main class="pb-14 pt-32 md:pt-36">
      <div class="mx-auto flex w-[88%] max-w-6xl flex-col gap-6 md:gap-8">
        <app-concept-navigation [currentSlug]="concept().slug" />

        <section
          data-testid="concept-detail-hero"
          class="overflow-hidden rounded-[2.4rem] border border-cyan-400/12 bg-slate-950/45 p-6 text-blue-50 shadow-[0_24px_90px_rgba(2,6,23,0.42)] md:p-8"
        >
          <div class="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.9fr)] lg:items-start">
            <div>
              <p class="font-pixel text-xs uppercase tracking-[0.28em] text-cyan-200/78">
                Trilha de conceitos
              </p>

              <a
                href="#/concepts"
                class="mt-4 inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100/78 transition hover:bg-cyan-300/14 hover:text-cyan-50"
              >
                Voltar para a visão geral
              </a>

              <h1 class="mt-5">
                <strong
                  class="font-pixel text-2xl font-normal text-cyan-100 text-shadow-md text-shadow-slate-950 md:text-3xl"
                >
                  {{ concept().title }}
                </strong>
              </h1>

              <p class="mt-4 max-w-2xl text-sm leading-7 text-blue-50/88 md:text-base">
                {{ concept().pageIntro }}
              </p>

              <p class="mt-3 max-w-2xl text-sm leading-7 text-blue-100/72 md:text-base">
                {{ concept().pagePlaceholder }}
              </p>
            </div>

            <aside
              class="rounded-[2rem] border border-cyan-300/12 bg-slate-900/55 p-5 shadow-[0_18px_50px_rgba(8,47,73,0.22)]"
            >
              <p class="font-pixel text-sm font-normal text-cyan-100">Estude em blocos curtos</p>
              <p class="mt-3 text-sm leading-7 text-blue-100/76">
                Leia a ideia central, observe o exemplo guiado e só depois compare sua abordagem com
                os exercícios relacionados.
              </p>
            </aside>
          </div>
        </section>

        <section
          data-testid="concept-detail-practice"
          class="rounded-[2.2rem] border border-cyan-400/12 bg-slate-950/50 p-6 text-blue-50 shadow-[0_22px_80px_rgba(2,6,23,0.36)] md:p-8"
        >
          <div class="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_auto] lg:items-center">
            <div>
              <h2>
                <strong
                  class="font-pixel text-xl font-normal text-cyan-100 text-shadow-md text-shadow-slate-950"
                >
                  Prática guiada no repositório
                </strong>
              </h2>

              <p class="mt-3 text-sm leading-7 text-blue-100/80 md:text-base">
                Pratique com apoio do repositório.
                No repositório de exercícios você encontra problemas e resoluções relacionados a este
                conceito para avançar para a prática.
              </p>
            </div>

            <a
              class="inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/18 hover:text-cyan-50"
              [href]="concept().practiceHref"
              target="_blank"
              rel="noreferrer"
            >
              Ver exercícios e resoluções
            </a>
          </div>
        </section>

        <section
          data-testid="concept-detail-content"
          class="grid gap-6 [&>section]:rounded-[2rem] [&>section]:border [&>section]:border-cyan-400/10 [&>section]:bg-slate-950/42 [&>section]:p-6 [&>section]:text-blue-50 [&>section]:shadow-[0_16px_56px_rgba(2,6,23,0.28)] md:[&>section]:p-8"
        >
          <ng-content />
        </section>
      </div>
    </main>

    <app-footer />
  `,
})
export class ConceptDetailPage {
  readonly concept = input.required<ConceptPageContent>();
}
