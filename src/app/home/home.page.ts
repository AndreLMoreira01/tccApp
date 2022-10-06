/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  historias = [
    { id: 1, nome: 'Coraline', autor: 'Neil Gaymer', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 2, nome: 'Aladdin', autor: 'Bidu', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 3, nome: 'Alice no País das Maravilhas', autor: 'Marco', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 4, nome: 'Dumbo', autor: 'Tim Burton', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 5, nome: 'A Bela e a Fera', autor: 'Disney', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'}

  ];

  buscarHistoria(index: number, itemObject: any) {
    return itemObject.id;
  }

  constructor(private alertController: AlertController) {

   }


   //alert quando abre o app
   async mostraAlert() {
    const alert = await this.alertController.create({
      header: 'Você ganhou uma conquista!',
      subHeader: 'Terra',
      message: 'Entre no app pela primeira vez',
      buttons: ['OK'],
    });

    await alert.present();
  }



 ngOnInit() {
  this.mostraAlert();
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
