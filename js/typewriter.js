// ===================================
// Typewriter Effect
// ===================================

export class Typewriter {
    constructor(elementId, words, options = {}) {
        this.element = document.getElementById(elementId);
        if (!this.element) return;

        this.words = words;
        this.typeSpeed = options.typeSpeed || 80;
        this.deleteSpeed = options.deleteSpeed || 40;
        this.pauseDuration = options.pauseDuration || 2000;

        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;

        this.type();
    }

    type() {
        const currentWord = this.words[this.wordIndex];

        if (this.isDeleting) {
            this.charIndex--;
            this.element.textContent = currentWord.substring(0, this.charIndex);
        } else {
            this.charIndex++;
            this.element.textContent = currentWord.substring(0, this.charIndex);
        }

        let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            delay = this.pauseDuration;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            delay = 400;
        }

        setTimeout(() => this.type(), delay);
    }
}
