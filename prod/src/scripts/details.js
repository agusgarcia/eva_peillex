//Libs
import $ from 'jquery';
import fullpage from 'fullpage.js';

import ScrollMagic from 'ScrollMagic';
import './../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import './../../node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

export default class Project {

    constructor() {
        console.log('Project Details');

        if (typeof Object.assign == 'undefined') {
            assign.polyfill();
        }

        this.initEls();
        this.initEvents();
        this.initAnimations();

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

        var detailsMainTM = TweenMax.from('.details_main', 0.3, {y: 100});

        new ScrollMagic.Scene({
            triggerElement: '.details_main',
            triggerHook: "onEnter",
            offset: -40
        })
            .setTween(detailsMainTM)
            .addIndicators()
            .addTo(this.controller);

        // Duration ignored / replaced by scene duration now
        var tween = TweenMax.to('.project_background', 0.45, {
            y: 200,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ('.project_background'),
            triggerHook: 'onLeave',
            duration: 1000
        })
            .setTween(tween)
            .addIndicators()
            .addTo(this.controller);


    }

}


