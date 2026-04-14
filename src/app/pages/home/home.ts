import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar'
import { Footer } from '../../core/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly focusCards = [
    {
      eyebrow: 'Base clara',
      title: 'Conceitos',
      description: 'Entenda a lógica antes de tentar resolver vários problemas de uma vez.',
    },
    {
      eyebrow: 'Prática guiada',
      title: 'Exercícios',
      description: 'Avance para desafios reais com contexto e comparação de solução.',
    },
    {
      eyebrow: 'Ritmo seguro',
      title: 'Sem travar',
      description: 'Siga em pequenos passos, revisando o necessário sem perder direção.',
    },
  ];

  protected readonly nextSteps = [
    {
      eyebrow: 'Primeiro passo',
      title: 'Conceitos',
      description:
        'Organize a base, entenda o vocabulário da programação e comece com uma trilha simples de estudo.',
      href: '#/concepts',
      cta: 'Começar pelos conceitos',
    },
    {
      eyebrow: 'Segundo passo',
      title: 'Exercícios',
      description:
        'Pratique com problemas reais e use o repositório para comparar a sua abordagem com uma resolução pronta.',
      href: '#/exercises',
      cta: 'Ir para os exercícios',
    },
  ];

  protected readonly studyFlow = [
    {
      title: 'Entenda a ideia',
      description: 'Leia a explicação central da página antes de mergulhar em código.',
    },
    {
      title: 'Pratique em problemas reais',
      description: 'Use os exercícios como ponte entre teoria, raciocínio e implementação.',
    },
    {
      title: 'Compare sua solução',
      description: 'Revise o repositório para validar caminhos e enxergar novas estratégias.',
    },
  ];
}
