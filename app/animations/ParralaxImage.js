import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class ParralaxImage {
    constructor({ imageSection }) {
        this.section = imageSection;
        this.image = this.section.querySelector("img");
        this.heightOffset = this.image.offsetHeight - this.section.offsetHeight;
        this._animate();
    }

    _animate() {
        gsap.fromTo(this.image, {
           y: -this.heightOffset
        }, {
            y: 0,
            scrollTrigger: {
                trigger: this.section,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: true,
            }
        })
    }

}