import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-conditionals-concept-page',
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
            Quando usar condições
          </strong>
        </h2>

        <p class="mt-2">
          Use condições quando o problema pede para comparar valores e escolher entre caminhos
          possíveis.
        </p>

        <p class="mt-2">
          Em vez de executar sempre os mesmos passos, o programa passa a decidir o que fazer de
          acordo com a regra do enunciado.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            O que observar nos exercícios
          </strong>
        </h2>

        <p class="mt-2">
          Primeiro, repare quais regras mudam o resultado e quais comparações definem cada resposta.
        </p>

        <p class="mt-2">
          Depois, veja se o problema trabalha com casos mutuamente exclusivos ou se mais de uma
          verificação precisa acontecer em sequência.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um exemplo simples é decidir se uma pessoa é maior de idade a partir da idade informada.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Quando essas escolhas ficarem mais naturais, avance para repetição e observe como regras e
          laços costumam aparecer juntos em muitos exercícios.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class ConditionalsConceptPage {
  protected readonly concept = conceptPages.conditionals;
}
