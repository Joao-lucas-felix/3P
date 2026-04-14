import { Component } from '@angular/core';

import { ConceptDetailPage } from '../../components/concept-detail-page/concept-detail-page';
import { conceptPages } from '../../concept-pages.data';

@Component({
  selector: 'app-basics-concept-page',
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
            Objetivo deste passo
          </strong>
        </h2>

        <p class="mt-2">
          Neste início, o foco é entender como entrada, processamento e saída trabalham juntos em
          um programa simples.
        </p>

        <p class="mt-2">
          Quando essa base fica clara, os exercícios deixam de parecer uma sequência solta de
          comandos e passam a fazer mais sentido.
        </p>
      </section>

      <section
        class="bg-slate-950/20 text-blue-50 border border-blue-200/5 rounded-3xl mx-auto p-8 grow max-xl shadow-blue-950/25 shadow-md"
      >
        <h2>
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
          Como pensar neste conceito
          </strong>
        </h2>

        <p class="mt-2">
          Primeiro, observe o que o problema pede para ler. Depois, identifique qual conta ou
          transformação precisa ser feita. Por fim, veja como apresentar o resultado de forma clara.
        </p>

        <p class="mt-2">
          Para começar bem, comece com exercícios de leitura de dados, variáveis e operações
          aritméticas antes de se preocupar com problemas mais longos.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Exemplo guiado
          </strong>
        </h2>

        <p class="mt-2">
          Um primeiro treino comum é ler dois valores, somá-los e exibir o resultado com clareza.
        </p>

        <h2 class="mt-6">
          <strong
            class="font-pixel font-normal text-blue-200 text-xl text-shadow-md text-shadow-blue-950"
          >
            Próximo passo
          </strong>
        </h2>

        <p class="mt-2">
          Depois de ganhar confiança com essa base, avance para condições e perceba como as decisões
          se apoiam nesses fundamentos.
        </p>
      </section>
    </app-concept-detail-page>
  `,
})
export class BasicsConceptPage {
  protected readonly concept = conceptPages.basics;
}
