import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-strings-concept-page',
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
            Ler texto com cuidado
          </strong>
        </h2>

        <p class="mt-2">
          Strings ajudam quando o problema trabalha com caracteres, palavras e frases em vez de
          apenas números.
        </p>

        <p class="mt-2">
          Nesses casos, pequenos detalhes de leitura e comparação podem mudar completamente o
          resultado.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Como praticar strings
          </strong>
        </h2>

        <p class="mt-2">
          Nos exercícios, observe como comparar e transformar textos depende da leitura correta de
          cada caractere.
        </p>

        <p class="mt-2">
          Sempre confira os detalhes da leitura textual, como espaços, maiúsculas e a ordem em que
          os caracteres aparecem.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um exercício inicial é contar vogais em uma palavra, verificando caractere por caractere.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Depois de fortalecer esse cuidado com texto, avance para matemática e observe como a
          interpretação também ajuda a identificar fórmulas e relações importantes.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class StringsConceptPage {
  protected readonly concept = conceptPages.strings;
}
