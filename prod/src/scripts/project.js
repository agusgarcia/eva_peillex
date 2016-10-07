//Libs
import $ from 'jquery';
import fullpage from 'fullpage.js';

import ScrollMagic from 'ScrollMagic';
import './../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import './../../node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

import Details from './details.js';

export default class Project {

  constructor() {
    console.log('Project Concept');

    //console.log('assign', typeof Object.assign, assign);
    if (typeof Object.assign == 'undefined') {
      //console.log('polyfill launch');
      assign.polyfill();
    }

    this.initEls();
    this.initEvents();
    // this.initAnimations();

    setTimeout(() => {

      // this.initAnimationStep1();
    }, 500);
  }

  initEls() {

    this.$els = {

      $fullpage: $('#fullpage'),
      $menu: $(".right-menu"),
      $seeButton: $('.see-more'),
      $arrowDown: $('.icon-arrow-down.icon-global'),
      $currentSlide: $('.project_left'),
      $currentSection: $('.section'),

      //Details
      $details: $('.project_details'),
      $btnShowExtras: $('.show-extras'),
      $detailsMain: $('.details_main'),
      $detailsMainChildren: $('.details_main-purpose, .details_main-solution'),
      $detailsExtras: $('.details_extras')

    }

  }

  initEvents() {
    this.$els.$fullpage.fullpage({
      sectionsColor: ['#FFF', '#9d5227', '#4BBFC3', '#7BAABE'],
      scrollingSpeed: 700,
      scrollOverflow: true,
      scrollOverflowOptions: { scrollbars: false, click: false},
      scrollBar: false,
      navigation: true,
      navigationPosition: "left",
      //  fadingEffect: true,
      menu: '#menu',
      // lockAnchors: false,
      anchors: ['section0', 'section1', 'section2', 'section3'],
      // slidesNavigation: true,

      onLeave: function (index, nextIndex, direction) {
        if (index == 1) {
          this.leaveIntro();
        }

        if (nextIndex == 1) {
          this.goToIntro();
        }
      }.bind(this)

    });

    this.$els.$fullpage.fullpage.setAllowScrolling(false);

    this.$els.$seeButton.on('click', this.showDetails.bind(this));
    this.$els.$btnShowExtras.on('click', this.showExtras.bind(this));

  }

  leaveIntro() {
    this.$els.$menu.removeClass('hide');
    this.$els.$seeButton.removeClass('hide-down');
    this.$els.$arrowDown.addClass('white');
    $('#fp-nav').addClass('show');
  }

  goToIntro() {
    this.$els.$menu.addClass('hide');
    this.$els.$seeButton.addClass('hide-down');
    this.$els.$arrowDown.removeClass('white');
    $('#fp-nav').removeClass('show');
  }

  showDetails() {
    console.log(this.$els.$currentSlide);
    this.$els.$currentSlide.addClass('hide');
    this.$els.$arrowDown.addClass('hide');
    this.$els.$currentSection.addClass('opened');
    this.$els.$seeButton.addClass('hide-left');
    this.$els.$details.removeClass('hidden');
    this.$els.$details.addClass('opened');
    this.$els.$fullpage.fullpage.reBuild();

    this.$els.$fullpage.fullpage.setAllowScrolling(false);
    this.$els.$fullpage.fullpage.setKeyboardScrolling(false);

    let details = new Details();
    details.initAnimations();

  }

  showExtras() {
    this.$els.$detailsMain.toggleClass('opened');
    this.$els.$detailsMainChildren.toggleClass('opened');
    this.$els.$detailsExtras.toggleClass('opened');
    this.$els.$btnShowExtras.toggleClass('opened');
    setTimeout(() => {
      this.$els.$fullpage.fullpage.reBuild();
    }, 500)
  }
}


