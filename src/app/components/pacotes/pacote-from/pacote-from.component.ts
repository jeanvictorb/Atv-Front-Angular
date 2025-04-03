import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacote-from',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './pacote-from.component.html',
  styleUrl: './pacote-from.component.scss'
})
export class PacoteFromComponent {
 cardpackage = [
    {
      titulo: 'Aventura nas Cataratas',
      descricao: 'Explore as Cataratas do Iguaçu de forma emocionante, combinando trilhas, passeios de barco e um voo panorâmico sobre as quedas d’água.',
      atividades: ['Macuco Safari', 'Trilha nas Cataratas do Iguaçu', 'Voo de Helicóptero sobre as Cataratas'],
      imagem: '',
    },
    {
      titulo: 'Explorador da Natureza',
      descricao: 'Conheça a biodiversidade de Foz do Iguaçu em um passeio que combina fauna e flora preservadas da região.',
      atividades: ['Parque das Aves', 'Itaipu Refúgio Biológico', 'Cataratas do Iguaçu (lado brasileiro)'],
      imagem: '',
    },
    {
      titulo: 'Adrenalina Total',
      descricao: 'Um pacote feito para os amantes de aventura, com atividades cheias de emoção e contato direto com a natureza.',
      atividades: ['Macuco Safari', 'Voo de Helicóptero sobre as Cataratas', 'Kattamaram II'],
      imagem: '',
    },
    {
      titulo: 'História e Cultura de Foz',
      descricao: 'Descubra a riqueza cultural e religiosa de Foz do Iguaçu visitando templos e monumentos históricos.',
      atividades: ['Templo Budista', 'Mesquita Árabe', 'Marco das Três Fronteiras'],
      imagem: '',
    },
    {
      titulo: 'Noite Argentina',
      descricao: 'Aprecie a cultura argentina com um jantar temático e um show de tango e folclore em Puerto Iguazú.',
      atividades: ['Jantar e Show de Tango', 'Cassino de Puerto Iguazú (opcional)'],
      imagem: '',
    },
    {
      titulo: 'Descobrindo a Argentina',
      descricao: 'Explore os encantos do lado argentino de Foz do Iguaçu, incluindo as impressionantes Cataratas Argentinas, um passeio pelo centro histórico de Puerto Iguazú e uma experiência gastronômica com pratos típicos.',
      atividades: ['Cataratas do Iguaçu - Lado Argentino', 'City Tour Argentina', 'Almoço em Puerto Iguazú', 'Duty Free Shop'],
      imagem: '',
    },
    {
      titulo: 'Aventuras no Paraguai',
      descricao: 'Descubra um lado cultural e natural do Paraguai que vai além das compras, visitando monumentos históricos, cachoeiras impressionantes e mercados tradicionais.',
      atividades: ['City Tour Paraguai', 'Salto Monday', 'Catedral de San Blas', 'Igreja São Lucas', 'Lago da República', 'Mercado de Abasto'],
      imagem: '',
    },
    {
      titulo: 'Tour Três Fronteiras',
      descricao: 'Visite os principais pontos turísticos de três países em um único dia, conhecendo o Brasil, Paraguai e Argentina.',
      atividades: ['City Tour Foz do Iguaçu', 'City Tour Paraguai', 'Marco das Três Fronteiras'],
      imagem: '',
    },
    {
      titulo: 'Diversão em Família',
      descricao: 'Pacote ideal para toda a família, combinando atrações educativas e interativas para crianças e adultos.',
      atividades: ['Parque das Aves', 'Complexo Dreams', 'Wonder Park'],
      imagem: '',
    },
    {
      titulo: 'Pacote Kids',
      descricao: 'Uma experiência mágica para as crianças, com atrações lúdicas e temáticas que garantem muita diversão.',
      atividades: ['Vale dos Dinossauros', 'Maravilhas do Mundo', 'Dreams Ice Bar'],
      imagem: '',
    },
    {
      titulo: 'Romance nas Cataratas',
      descricao: 'Um pacote perfeito para casais que desejam momentos especiais em um cenário paradisíaco.',
      atividades: ['Pôr do Sol no Parque Nacional do Iguaçu', 'Jantar no Kattamaram II', 'Noite nas Cataratas'],
      imagem: '',
    },
    {
      titulo: 'Lua de Mel em Foz',
      descricao: 'Celebre o amor com um pacote exclusivo que inclui experiências únicas e inesquecíveis.',
      atividades: ['Voo de Helicóptero sobre as Cataratas', 'Jantar romântico', 'Passeio noturno no Marco das Três Fronteiras'],
      imagem: '',
    },
    {
      titulo: 'Foz do Iguaçu 3 Dias e 2 Noites',
      descricao: 'Descubra os principais pontos turísticos de Foz do Iguaçu em uma viagem de 3 dias.',
      atividades: ['Cataratas do Iguaçu', 'Itaipu Panorâmica', 'Parque das Aves', 'Jantar Temático (opcional)'],
      imagem: '',
    },
    {
      titulo: 'Foz do Iguaçu 5 Dias e 4 Noites',
      descricao: 'Um roteiro completo para quem quer explorar Foz do Iguaçu com calma e aproveitar todas as atrações.',
      atividades: [
        'Cataratas do Iguaçu',
        'Macuco Safari',
        'Parque das Aves',
        'Itaipu Iluminada',
        'Noite Argentina',
        'City Tour Paraguai',
      ],
      imagem: '',
    }
  ];
  
}
