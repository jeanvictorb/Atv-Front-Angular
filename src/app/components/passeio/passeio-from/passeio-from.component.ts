import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-passeio-from',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './passeio-from.component.html',
  styleUrl: './passeio-from.component.scss',
})
export class PasseioFromComponent {
  cardList = [
    {
      titulo: 'Cataratas do Iguaçu - Lado Brasileiro',
      descricao:
        "Explore as impressionantes quedas d'água das Cataratas do Iguaçu pelo lado brasileiro, com vistas panorâmicas e trilhas que proporcionam uma experiência inesquecível.",
      imagem: '',
    },
    {
      titulo: 'Circuito Itaipu',
      descricao:
        'Explore a Usina de Itaipu em um circuito que permite conhecer de perto suas operações e sua importância para a geração de energia.',
      imagem: '',
    },
    {
      titulo: 'City Tour Foz do Iguaçu',
      descricao:
        'Conheça os principais pontos turísticos de Foz do Iguaçu, incluindo visitas ao Templo Budista, à Mesquita Omar Ibn Al-Khattab e ao Marco das Três Fronteiras, explorando a diversidade cultural e histórica da cidade.',
      imagem: '',
    },
    {
      titulo: 'City Tour Paraguai',
      descricao:
        'Descubra um lado diferente do Paraguai, visitando pontos culturais e históricos além das tradicionais compras em Ciudad del Este.',
      imagem: '',
    },
    {
      titulo: 'Complexo Dreams',
      descricao:
        'Explore um conjunto de atrações que inclui o Museu de Cera, Maravilhas do Mundo, Vale dos Dinossauros e Dreams Motor Show, oferecendo experiências interativas e educativas para toda a família.',
      imagem: '',
    },
    {
      titulo: 'Dreams Ice Bar',
      descricao:
        'Experimente um bar totalmente feito de gelo, com esculturas e decorações elaboradas, onde você pode desfrutar de bebidas servidas em copos de gelo em uma atmosfera gelada e deslumbrante.',
      imagem: '',
    },
    {
      titulo: 'Itaipu Iluminada',
      descricao:
        'Desfrute de um espetáculo noturno onde a barragem da Usina de Itaipu é iluminada com mais de 747 refletores e 112 luminárias, criando uma experiência visual impressionante.',
      imagem: '',
    },
    {
      titulo: 'Itaipu Panorâmica',
      descricao:
        'Conheça a grandiosidade da Usina de Itaipu em um tour que oferece vistas abrangentes da barragem, do vertedouro e do lago de Itaipu a partir de pontos de observação estratégicos.',
      imagem: '',
    },
    {
      titulo: 'Itaipu Refúgio Biológico',
      descricao:
        'Explore a riqueza da biodiversidade local em trilhas ecológicas que passam por áreas de preservação, conhecendo projetos de conservação ambiental e diversas espécies de plantas e animais.',
      imagem: '',
    },
    {
      titulo: 'Kattamaram II',
      descricao:
        'Navegue pelas águas do Rio Iguaçu em um luxuoso barco, desfrutando de vistas panorâmicas das margens brasileiras, argentinas e paraguaias, com opção de buffet a bordo.',
      imagem: '',
    },
    {
      titulo: 'Macuco Safari',
      descricao:
        'Aventure-se em um passeio que combina trilha na floresta e navegação de barco até as quedas das Cataratas do Iguaçu, proporcionando uma experiência emocionante e próxima das águas.',
      imagem: '',
    },
    {
      titulo: 'Maravilhas do Mundo',
      descricao:
        'Faça uma viagem pelos maiores monumentos do planeta em um parque temático que apresenta réplicas detalhadas de ícones como a Torre Eiffel, o Cristo Redentor e a Estátua da Liberdade.',
      imagem: '',
    },
    {
      titulo: 'Mesquita Árabe',
      descricao:
        'Visite a Mesquita Omar Ibn Al-Khatab, um ponto turístico que destaca a diversidade cultural de Foz do Iguaçu, com arquitetura impressionante e ambiente de serenidade.',
      imagem: '',
    },
    {
      titulo: 'Motor Show',
      descricao:
        'Aprecie uma combinação única de motocicletas, música ao vivo e gastronomia em um ambiente temático que encanta entusiastas de motos e cultura.',
      imagem: '',
    },
    {
      titulo: 'Museu de Cera',
      descricao:
        'Encontre réplicas realistas de figuras icônicas da cultura pop, história e entretenimento em cenários interativos que permitem fotos memoráveis.',
      imagem: '',
    },
    {
      titulo: 'Noite Argentina - Jantar e Show',
      descricao:
        'Desfrute da cultura argentina em uma noite especial com jantar típico e apresentações de tango e folclore em Puerto Iguazú.',
      imagem: '',
    },
    {
      titulo: 'Noite nas Cataratas',
      descricao:
        'Experimente uma visita noturna às Cataratas do Iguaçu, contemplando as quedas iluminadas pela lua e por luzes especiais, em uma atmosfera mística e envolvente.',
      imagem: '',
    },
    {
      titulo: 'Parque das Aves',
      descricao:
        'Visite um santuário de conservação com mais de 1.300 aves de 150 espécies diferentes, caminhando por trilhas que passam por viveiros gigantes e interagindo com aves tropicais em seu habitat natural.',
      imagem: './assets/img/bird_park.jpg',
    },
    {
      titulo: 'Pôr do Sol nas Cataratas',
      descricao:
        'Vivencie a mágica do pôr do sol nas Cataratas do Iguaçu, quando as águas refletem os tons dourados e alaranjados do sol, proporcionando uma experiência tranquila e inesquecível.',
      imagem: '',
    },
    {
      titulo: 'Pôr do Sol no Marco das Três Fronteiras',
      descricao:
        'Aprecie um dos mais belos pôr do sol de Foz do Iguaçu, com vista para os rios Iguaçu e Paraná, enquanto aproveita apresentações culturais e gastronomia local.',
      imagem: '',
    },
    {
      titulo: 'Pôr do Sol no Parque Nacional do Iguaçu',
      descricao:
        'Assista ao espetacular pôr do sol sobre as Cataratas do Iguaçu, criando uma vista deslumbrante e inesquecível em um ambiente tranquilo e envolvente.',
      imagem: '',
    },
    {
      titulo: 'Templo Budista',
      descricao:
        'Visite o Templo Budista de Foz do Iguaçu, admire as estátuas de Buda e a arquitetura tradicional enquanto aprende sobre a filosofia budista em um ambiente de paz e serenidade.',
      imagem: '',
    },
    {
      titulo: 'Voo de Helicóptero sobre as Cataratas',
      descricao:
        "Tenha uma perspectiva única das Cataratas do Iguaçu em um voo panorâmico de helicóptero, apreciando as quedas d'água e a floresta ao redor de um ângulo privilegiado.",
      imagem: '',
    },
    {
      titulo: 'Wonder Park',
      descricao:
        'Divirta-se em um parque temático que combina atrações como o Movie Cars e o Water Show, oferecendo entretenimento para toda a família.',
      imagem: '',
    },
  ];
}
