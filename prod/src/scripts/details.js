//Libs
import $ from 'jquery';
import fullpage from 'fullpage.js';

import ScrollMagic from 'ScrollMagic';
import './../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import './../../node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

export default class Details {

  constructor() {
    console.log('Project Details');

    if (typeof Object.assign == 'undefined') {
      assign.polyfill();
    }

    this.initEls();
    this.initEvents();

    setTimeout(() => {

      // this.initAnimationStep1();
    }, 500);
  }

  initEls() {

    this.$els = {

      $fullpage: $('#fullpage'),

      //Details
      $details: $('.project_details'),
      $btnShowExtras: $('.show-extras'),
      $detailsMain: $('.details_main'),
      $detailsMainChildren: $('.details_main-purpose, .details_main-solution'),
      $detailsExtras: $('.details_extras')
    };

    this.controller = new ScrollMagic.Controller();

  }

  initEvents() {

  }

  initAnimations() {

   this.appearFromBottom('.details_main');
   this.appearFromBottom('.details_img');


    new ScrollMagic.Scene({
      triggerElement: ('.details_main'),
      triggerHook: 'onEnter',
      duration: 1000,
      offset: -100
    })
      .addTo(this.controller)
      .addIndicators()
      .on("progress", function (e) {
        this.move(".project_background-layer", e.progress);
      }.bind(this));



    /**      // Duration ignored / replaced by scene duration now
     var tween = TweenMax.to('.project_background', 0.45, {
            y: 200,
            ease:Linear.easeNone,
          force3D: true
        }); **/
/**
    new ScrollMagic.Scene({
      triggerElement: ('.project_background'),
      triggerHook: 'onLeave',
      duration: "50%"
    })
      .on("progress", function (e) {
        this.move(".project_background", e.progress);
      }.bind(this))
      .addIndicators()
      .addTo(this.controller);
**/

  }

  move(what, progress) {
    let to = progress * 0.9;
    TweenMax.to('.project_background-layer', 0.3, {opacity: to});
    console.log(to);
}

  appearFromBottom(element) {
    let tween = TweenMax.from(element, 0.3, {y: 100});

    new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: "onEnter",
      offset: 10
    })
      .setTween(tween)
      .addIndicators()
      .addTo(this.controller);
  }



}


