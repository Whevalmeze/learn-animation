import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';
import Observer from './classes/Observer';
import TextReveal from './animations/TextReveal';
import Button from './animations/Buttons';
import ParralaxImage from './animations/ParralaxImage';


class App {
    constructor() {
        this._createLenis(); //for creating new scroll effect
        this._render(); //for rendering the scroll effect
        this._createTextReveals(); //for creating text animation
        this._createButtons(); //for creating button animation
        this._createParralaxImages(); //for creating parralax animations
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.02,
        })
    }
    _render(time) {
        this.lenis.raf(time)
        requestAnimationFrame(this._render.bind(this))
    }
    _createObserver() {
        const texts = [...document.querySelectorAll("h2")]
        texts.forEach(text => {
            new Observer({
                element: text
            })
        })
    }
    _createTextReveals() {
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')]
        textItems.forEach(text => {
            new TextReveal({ element: text })
        })
    }
    _createButtons() {
        const buttons = [...document.querySelectorAll("[data-animation='button']")];
        buttons.forEach(button => {
            new Button({ element: button })
        })
    }
    _createParralaxImages() {
        const images = [...document.querySelectorAll("[data-animation='parralaxImage']")];
        images.forEach(image => {
            new ParralaxImage({ imageSection: image })
        })
    }
}


new App();