'use strict';

//Style
import '../style/main.scss';
import './libs/scrolloverflow.min.js'

//Pages Classes
import Project from './project.js'
import Details from './details.js'

export default class app {
    constructor() {
        console.log('Constructor app');

        this.initEls();
        this.initEvents();
    }

    initEls() {
        this.$els = {
            $body: $('body'),
            $document: $(document),
            $menu: $('.right-menu')
        }
    }

    initEvents() {

        this.launchPage();
        this.$els.$menu.on('click', this.toggleMenu.bind(this));
    }

    launchPage() {
        //console.log("launchpage");
        // if (this.$els.$homepage.length) {
        this.controllerPage = new Project();
        this.controllerPage = new Details();
        //}
    }

    toggleMenu() {
        this.$els.$menu.toggleClass('open');
    }
}

new app();