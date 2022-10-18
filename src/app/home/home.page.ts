import { AlertJupiterComponent } from './../alert-jupiter/alert-jupiter.component';
import { AlertMarsComponent } from './../alert-mars/alert-mars.component';
import { ModalController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertSaturnComponent } from '../alert-saturn/alert-saturn.component';
import { AlertMoonComponent } from '../alert-moon/alert-moon.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  historias = [
    { id: 1, nome: 'Coraline', autor: 'Neil Gaymer', descricao: 'Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.', tipo: 'Ficção', conquista: 'Marte'},
    { id: 2, nome: 'Aladdin', autor: 'Antoine Galland', descricao: 'Um jovem humilde descobre uma lâmpada mágica com um gênio que pode conceder desejos. Agora, o rapaz quer conquistar a moça por quem se apaixonou, mas o que ele não sabe é que a jovem é uma princesa que já está comprometida. Com a ajuda do gênio, ele tenta se passar por um príncipe para fisgar o amor da moça e a confiança de seu pai.', tipo: 'Ficção', conquista: 'Marte'},
    { id: 3, nome: 'Alice no País das Maravilhas', autor: 'Lewis Carroll', descricao: '“A única forma de chegar ao impossível e acreditar que é possível” Todos nós possuímos sonhos que, à primeira vista, parecem que são impossíveis. Isso porque no começo dispomos de pouca experiência e recursos para encarar tal empreitada', tipo: 'Ficção', conquista: 'Marte'},
    { id: 4, nome: 'Dumbo', autor: 'Tim Burton', descricao: 'Dumbo é um bebê elefante de um circo que nasceu com orelhas enormes. Após ser ridicularizado por seu grupo de amigos, ele se transforma na principal atração de seu circo quando descobre que, usando suas orelhas, é capaz de fazer o que nenhum outro elefante consegue: voar.', tipo: 'Ficção', conquista: 'Marte'},
    { id: 5, nome: 'O Pequeno Princípe', autor: 'Antoine de Saint-Exupery', descricao: 'O Pequeno Príncipe é uma obra literária do escritor francês Antoine de Saint-Exupéry, que conta a história da amizade entre um homem frustrado por ninguém compreender os seus desenhos, com um principezinho que habita um asteroide no espaço.    ', tipo: 'Ficção', conquista: 'Marte'},
    { id: 6, nome: 'O mágico de Oz', autor: 'L. Frank Baum', descricao: 'The Wonderful Wizard of Oz é um romance infantil, de alta fantasia, escrito por L. Frank Baum e ilustrado por W. W. Denslow, originalmente publicado pela George M. Hill Company em Chicago em 17 de maio de 1900. É o primeiro de uma série de catorze livros que relata as aventuras na fantástica Terra de Oz.', tipo: 'Ficção', conquista: 'Marte'},
    { id: 7, nome: 'Peter Pan', autor: 'J. M. Barrie', descricao: 'Peter Pan é um personagem criado por J. M. Barrie na novel The Little White Bird, mais tarde foi usada na sua notória peça de teatro intitulada Peter and Wendy, que originou um livro homônimo para crianças publicado em 1911, e de várias adaptações destes para o cinema.', tipo: 'Ficção', conquista: 'Marte'}
  ];

  historiasClassicas = [
    { id: 1, nome: 'O Patinho Feio', autor: 'Hans Christian Andersen', descricao: 'Uma das histórias infantis mais populares de todos os tempos e que todos conhecemos desde pequenos é a história do “Patinho Feio”, que conta as desventuras de um patinho que nasce diferente dos outros, tendo uma penugem escura enquanto os seus irmãos são lindos. O pobre patito cresce complexado e infeliz, sentindo-se diferente dos outros e achando-se feio e rejeitado por toda a gente. Não obstante, quando cresce transforma-se num bonito cisne, o que sempre tinha sido sem saber. Deste modo, transforma-se no mais bonito dos animais do lago, uma coisa que nem sequer sonhava.', tipo: 'Clássicos', conquista: 'Marte'},
    { id: 2, nome: 'A Bela e a Fera', autor: 'Gabrielle-Suzanne de Villeneuve', descricao: 'Bela era uma jovem destemida que, em troca da liberdade do pai, oferece a sua companhia a um ser monstruoso que vive num castelo enfeitiçado. O que ela mais tarde vem a perceber é que, debaixo da sua estranha aparência, ele é na realidade um príncipe sob uma maldição. O feitiço apenas poderá ser quebrado se, apesar do seu aspecto ameaçador, ele conseguir conquistar o afecto de um coração puro. Apesar do receio inicial, a rapariga torna-se amiga dos empregados do castelo - também eles sob encantamento -, que a ajudarão a encontrar o caminho para o velho e cansado coração do Monstro.', tipo: 'Clássicos', conquista: 'Marte'},
    { id: 3, nome: 'João e Maria', autor: 'Irmãos Grimm', descricao: 'Na história registrada pelos irmãos Jacob e Wilhelm Grimm, João e Maria são duas crianças de uma família muito pobre, que acabam abandonadas pelos pais em uma floresta. Conscientes dos planos da família, os dois jogam migalhas de pão pelo caminho de modo que, mais tarde, pudessem encontrar a trilha de volta para casa.', tipo: 'Clássicos', conquista: 'Marte'},
    { id: 4, nome: 'A Branca de Neve', autor: 'Irmãos Grimm', descricao: 'Branca de Neve é um conto de fadas clássico originário da tradição oral alemã, que foi compilado pelos Irmãos Grimm e publicado entre os anos de 1817 e 1822, num livro com várias outras fábulas, intitulado "Kinder-und Hausmärchen".', tipo: 'Clássicos', conquista: 'Marte'},
    { id: 5, nome: 'Chapéuzinho Vermelho', autor: 'Charles Perrault', descricao: 'Capuchinho Vermelho ou Chapeuzinho Vermelho é um conto de fadas clássico, cujas origens podem ser traçadas a fábulas europeias do século X. O nome do conto vem da protagonista, uma menina que usa um capuz vermelho.', tipo: 'Clássicos', conquista:'Marte'},
    { id: 6, nome: 'Pinóquio', autor: 'Carlo Collodi', descricao: 'As Aventuras de Pinóquio é um romance escrito pelo italiano Carlo Collodi em Florença no ano de 1881 e publicado dois anos depois com ilustrações de Enrico Mazzanti. Trata-se de um clássico da literatura infanto-juvenil.', tipo: 'Clássicos', conquista: 'Marte'},
    { id: 7, nome: 'Cinderela', autor: 'Irmãos Grimm', descricao: 'Cinderela é um dos contos de fadas mais populares da Humanidade. Sua origem tem diferentes versões. A versão mais conhecida é a do escritor francês Charles Perrault, de 1697, baseada num conto italiano popular chamado La gatta cenerentola. A mais antiga é originária da China, por volta de 860.', tipo: 'Clássicos', conquista: 'Marte'}
  ];

  historiasBrasileiras = [
    { id: 1, nome: 'Saci', autor: 'Monteiro Lobato', descricao: 'Muito brincalhão e travesso, o Saci surge como um redemoinho e gosta de assustar pessoas. Embora o Saci-pererê seja o mais conhecido, existem três tipos de saci: O Pererê, o Trique e o Saçurá.', tipo: 'Folclore brasileiro', conquista: 'Marte'},
    { id: 2, nome: 'Curupira', autor: 'José de Anchieta', descricao: 'O curupira é o personagem de uma lenda do folclore brasileiro conhecido por ter pequena estatura e perseguir aqueles que entram na floresta para destruí-la.', tipo: 'Folclore brasileiro', conquista: 'Marte'},
    { id: 3, nome: 'Cuca', autor: 'Monteiro Lobato', descricao: 'De origem portuguesa, a lenda da Cuca está associada muitas vezes com o “bicho papão”. Ela é uma personagem muito temida pelas crianças, representada por velha feia e malvada com cara de jacaré que raramente dorme.', tipo: 'Folclore brasileiro', conquista: 'Marte'},
    { id: 4, nome: 'Mula sem Cabeça', autor: 'Ilan Brenman', descricao: 'Mula sem cabeça é um personagem do folclore brasileiro. Na maioria dos contos, é um fantasma de uma mulher que foi amaldiçoada por ter se entregado com um padre e foi condenada a se transformar em uma mula sem cabeça que tem fogo ao invés de uma cabeça, galopando através dos campos desde o por do sol de quinta-feira até o nascer do sol de sexta-feira. O mito tem várias variações em relação ao pecado que transformou a mulher amaldiçoada em um monstro.', tipo: 'Folclore brasileiro', conquista: 'Marte'},
    { id: 5, nome: 'Boitatá', autor: 'José de Anchieta', descricao: ' O Boitatá é um personagem folclórico do Brasil que defende as matas. A serpente de fogo é um mito etiológico relacionado à ordem dos tesouros escusos, a defesa das florestas contra queimadas ou a encarnação de alma penada.', tipo: 'Folclore brasileiro', conquista: 'Marte'},
    { id: 6, nome: 'Boto-Cor-de-rosa', autor: 'Luís da Câmara Cascudo', descricao: 'Boto-cor-de-rosa é uma lenda do folclore que fala de botos que se transformavam em homens sedutores de mulheres, engravidando-as e desaparecendo depois.', tipo: 'Folclore brasileiro', conquista: 'Marte'},
    { id: 7, nome: 'Negrinho do Pastoreiro', autor: 'Walcyr Carrasco', descricao: 'O Negrinho do Pastoreio é um personagem do folclore brasileiro conhecido na região sul do Brasil. De origem africana e cristã, a lenda surgiu em meados do século 19 e conta a história de um menino escravo que recebeu um milagre de Nossa Senhora por ser um inocente que sofre com castigos de um fazendeiro.', tipo: 'Folclore brasileiro', conquista: 'Marte'}
  ];

  buscarHistoria(index: number, itemObject: any) {
    return itemObject.id;
  }

  constructor(private modalController: ModalController) {

   }

   ngOnInit() {
  }


   unlockMars(){
    this.showModal('O planeta foi desbloqueado');
  }

  unlockJupiter(){
    this.showModalB('O planeta foi desbloqueado');
  }

  unlockSaturn(){
    this.showModalC('O planeta foi desbloqueado');
  }

  unlockMoon(){
    this.showModalD('O planeta foi desbloqueado');
  }


  async showModal( msg ){

    const modal = await this.modalController.create({
      component: AlertMarsComponent,
      componentProps: { message: msg },
      cssClass: 'alert-mars'
    });

      await modal.present();
    }

    async showModalB( msg ){

      const modal = await this.modalController.create({
        component: AlertJupiterComponent,
        componentProps: { message: msg },
        cssClass: 'alert-jupiter'
      });

        await modal.present();
      }

      async showModalC( msg ){

        const modal = await this.modalController.create({
          component: AlertSaturnComponent,
          componentProps: { message: msg },
          cssClass: 'alert-saturn'
        });

          await modal.present();
        }

        async showModalD( msg ){

          const modal = await this.modalController.create({
            component: AlertMoonComponent,
            componentProps: { message: msg },
            cssClass: 'alert-moon'
          });

            await modal.present();
          }

  public slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 50,
    centeredSlides: true,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
          let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) {translateX = 0;}
          if (Math.abs(translateY) < 0.001) {translateY = 0;}
          if (Math.abs(translateZ) < 0.001) {translateZ = 0;}
          if (Math.abs(rotateY) < 0.001) {rotateY = 0;}
          if (Math.abs(rotateX) < 0.001) {rotateX = 0;}

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

        }

        // Set correct perspective for IE10
        if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
      }
    }
  }
}
