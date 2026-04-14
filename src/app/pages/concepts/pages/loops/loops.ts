import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-loops-concept-page',
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
            Por que repetir
          </strong>
        </h2>

        <p class="mt-2">
          Repetição ajuda quando o problema pede contagem, acumulação e leitura de vários casos sem
          reescrever o mesmo passo muitas vezes.
        </p>

        <p class="mt-2">
          Em vez de copiar comandos, você passa a controlar quantas vezes uma ação acontece e como o
          resultado evolui a cada volta.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Como praticar repetição
          </strong>
        </h2>

        <p class="mt-2">
          Ao resolver os exercícios, acompanhe como o valor muda a cada passo e observe quando o
          laço deve continuar ou parar.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um bom começo é somar cinco números em sequência, atualizando o acumulador a cada leitura.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Depois de ganhar segurança com repetição, avance para decomposição e organize problemas
          maiores em etapas menores.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class LoopsConceptPage {
  protected readonly concept = conceptPages.loops;
}
