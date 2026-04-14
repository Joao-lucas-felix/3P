import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-math-concept-page',
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
            Pensar antes da fórmula
          </strong>
        </h2>

        <p class="mt-2">
          Em muitos problemas, a parte mais importante vem antes do código: reconhecer padrões
          numéricos, propriedades e relações entre valores.
        </p>

        <p class="mt-2">
          Quando isso fica claro, a implementação costuma virar uma tradução mais simples da ideia
          matemática para passos programáveis.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Como praticar matemática
          </strong>
        </h2>

        <p class="mt-2">
          Nos exercícios, tente descobrir primeiro qual fórmula ou relação ajuda a simplificar o
          problema antes de escrever qualquer estrutura.
        </p>

        <p class="mt-2">
          Também vale observar casos clássicos de divisibilidade, contagem e propriedades que podem
          reduzir tentativas desnecessárias.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um exemplo simples é descobrir quantos números até um limite são múltiplos de 3 sem testar
          caso por caso.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Depois de reconhecer melhor essas ideias, avance para problemas ad-hoc e treine como
          combinar interpretação cuidadosa com estratégia de resolução.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class MathConceptPage {
  protected readonly concept = conceptPages.math;
}
