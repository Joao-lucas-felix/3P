import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-ad-hoc-concept-page',
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
            Ler o enunciado com calma
          </strong>
        </h2>

        <p class="mt-2">
          Problemas ad-hoc costumam depender de detalhes, exceções e regras que valem apenas
          naquele problema.
        </p>

        <p class="mt-2">
          Por isso, entender bem o texto costuma ser mais importante do que pensar em uma técnica
          pronta logo no início.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Como praticar ad-hoc
          </strong>
        </h2>

        <p class="mt-2">
          Nos exercícios, vale simular o comportamento esperado com casos pequenos antes de escrever
          a solução completa.
        </p>

        <p class="mt-2">
          Esse processo ajuda a transformar regras específicas em passos claros e reduz erros de
          interpretação.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um bom treino é simular a movimentação de um personagem seguindo regras pequenas e casos de
          borda.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Depois dessa primeira leitura guiada, retorne aos exercícios e tente resolver enunciados
          variados com mais calma, comparação de casos e revisão das regras.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class AdHocConceptPage {
  protected readonly concept = conceptPages['ad-hoc'];
}
