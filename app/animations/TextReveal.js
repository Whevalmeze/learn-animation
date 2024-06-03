import SplitType from "split-type";
import Observer from "../classes/Observer";
import gsap from "gsap";

export default class TextReveal extends Observer {
    constructor({ element }) {
        super({ element })
        this.element = element;
        const splitted =  new SplitType(this.element, { types: "words" });
        this.finalsplit = new SplitType(splitted.words, { types: "words" })
    }

    onEnter() {
        gsap.to(this.finalsplit.words, {
            y: "0%",
            stagger: 0.015,
            duration: 1.3,
            ease: "power3",
        });
    }

    onLeave() {
        gsap.set(this.finalsplit.words, {
            y: "100%"
        })
    }
}