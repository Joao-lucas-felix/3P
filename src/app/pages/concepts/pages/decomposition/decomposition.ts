import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-decomposition-concept-page',
  imports: [ConceptDetailPage],
  template: `
    <app-concept-detail-page [concept]="concept">
      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Dividir para entender
          </strong>
        </h2>

        <p class="mt-2">
          Decomposição ajuda a quebrar problemas em partes menores para que cada etapa fique mais
          simples de entender e resolver.
        </p>

        <p class="mt-2">
          Em vez de tentar resolver tudo de uma vez, você organiza o raciocínio em pequenas decisões
          e cálculos intermediários.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Como observar os exercícios
          </strong>
        </h2>

        <p class="mt-2">
          Durante a leitura, observe quais etapas podem ser separadas e quais valores intermediários
          ajudam a chegar à resposta final.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um caso clássico é calcular horas, minutos e segundos a partir de uma quantidade total de
          segundos.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Depois dessa organização inicial, avance para listas e veja como guardar e percorrer vários
          valores com mais segurança.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class DecompositionConceptPage {
  protected readonly concept = conceptPages.decomposition;
}
