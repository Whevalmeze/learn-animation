import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let screenWidth = window ? window.innerWidth : 0;

export default class Scroller {
    constructor({ imageSection }) {
        this.imageSection = imageSection;
        this.imageWrapper = imageSection.querySelector("div.image-wrapper");
        this.wrapperOffset = imageSection.offsetWidth - screenWidth;
        this._animate();
    }
    _animate() {
        gsap.fromTo(this.imageSection, {
            x: 10
        }, {
            x: -200,
            scrollTrigger: {
                scrub: true,
                trigger: this.imageSection,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
            }
        })
    }
}