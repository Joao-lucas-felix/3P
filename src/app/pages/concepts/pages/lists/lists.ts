import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-lists-concept-page',
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
            Guardar vários valores
          </strong>
        </h2>

        <p class="mt-2">
          Listas ajudam quando você precisa trabalhar com mais de um valor ao mesmo tempo dentro de
          uma mesma coleção de dados.
        </p>

        <p class="mt-2">
          Em vez de criar uma variável para cada item, você passa a organizar tudo em uma estrutura
          que pode ser percorrida com mais clareza.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Como praticar listas
          </strong>
        </h2>

        <p class="mt-2">
          Nos exercícios, observe como funciona o acesso por índice e como cada posição representa
          um valor específico dentro da lista.
        </p>

        <p class="mt-2">
          Quando o problema pedir para visitar todos os elementos, use a ideia de Percurso com
          repetição para acompanhar o caminho feito pela estrutura.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um exemplo útil é percorrer uma lista para encontrar o maior valor sem perder o índice
          atual.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Depois de ganhar confiança com listas, avance para matrizes e veja como esse mesmo
          raciocínio cresce quando os dados aparecem em linhas e colunas.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class ListsConceptPage {
  protected readonly concept = conceptPages.lists;
}
