import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-matrices-concept-page',
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
            Ler uma grade
          </strong>
        </h2>

        <p class="mt-2">
          Matrizes ajudam quando os dados aparecem organizados em linhas e colunas, como acontece em
          tabelas e grades.
        </p>

        <p class="mt-2">
          Em vez de pensar em um caminho único, você passa a localizar cada valor de acordo com sua
          posição na estrutura.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Como praticar matrizes
          </strong>
        </h2>

        <p class="mt-2">
          Nos exercícios, observe como o uso de dois índices ajuda a encontrar a posição de cada
          valor dentro da grade.
        </p>

        <p class="mt-2">
          Sempre que possível, acompanhe primeiro a linha e depois a coluna para construir um
          percurso mais claro.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um primeiro exercício é somar os valores de uma linha, observando como linha e coluna se
          combinam na leitura.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Quando essa leitura em grade estiver mais segura, avance para strings e perceba como a
          atenção aos detalhes também continua importante no trabalho com texto.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class MatricesConceptPage {
  protected readonly concept = conceptPages.matrices;
}
